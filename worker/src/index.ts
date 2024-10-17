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