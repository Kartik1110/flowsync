import { PrismaClient } from "@prisma/client";
import { Kafka } from "kafkajs";

const TOPIC_NAME = "zap-events";
const KAFKA_BROKERS = process.env.KAFKA_BROKERS?.split(",") || [
  "localhost:9092",
];

const client = new PrismaClient();

const kafka = new Kafka({
  clientId: "outbox-processor",
  brokers: KAFKA_BROKERS,
});

async function main() {
  const producer = kafka.producer();

  try {
    await producer.connect();
    console.log("Kafka producer connected.");

    while (true) {
      const pendingRows = await client.zapRunOutbox.findMany({
        where: {},
        take: 10,
      });

      if (pendingRows.length === 0) {
        // No pending rows, sleep for a bit to avoid busy looping
        await sleep(1000);
        continue;
      }

      const messages = pendingRows.map((r) => ({
        value: JSON.stringify({ zapRunId: r.zapRunId, stage: 0 }),
      }));

      await producer.send({
        topic: TOPIC_NAME,
        messages,
      });

      // delete rows after processed
      await client.zapRunOutbox.deleteMany({
        where: {
          id: { in: pendingRows.map((x) => x.id) },
        },
      });

      console.log(`Processed and deleted ${pendingRows.length} rows.`);
    }
  } catch (error) {
    console.error("Error in outbox processor:", error);
  } finally {
    await producer.disconnect();
    await client.$disconnect();
  }
}

// Helper function for sleep
function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Handle graceful shutdown
process.on("SIGINT", async () => {
  console.log("Shutting down gracefully...");
  await client.$disconnect();
  process.exit(0);
});

main();
