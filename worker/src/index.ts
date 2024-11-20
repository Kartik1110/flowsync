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
  const consumer = kafka.consumer({ groupId: "main-worker" });
  await consumer.connect();

  await consumer.subscribe({ topic: TOPIC_NAME, fromBeginning: true });

  await consumer.run({
    autoCommit: false,
    eachMessage: async ({ topic, partition, message }) => {
      console.log(topic, partition, message);

      await consumer.commitOffsets([
        {
          topic: TOPIC_NAME,
          partition,
          offset: (parseInt(message.offset) + 1).toString(),
        },
      ]);
    },
  });
}

main();
