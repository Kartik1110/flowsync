import express from "express";
import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();
const app = express();

app.use(express.json());

app.post("/hooks/catch/:userId/:zapId", async (req, res) => {
  const { userId, zapId } = req.params;
  const body = req.body; // extract metadata from this

  try {
    // store the trigger in the db
    await client.$transaction(async (tx) => {
      await tx.zapRun.create({
        data: {
          zapId: zapId,
          metadata: body,
          zapRunOutbox: {
            create: {},
          },
        },
        include: {
          zapRunOutbox: true,
        },
      });
    });

    res.status(200).json({
      status: "success",
      message: "Trigger stored successfully",
      data: "",
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Error in storing trigger",
      data: "",
    });
  }
});

app.listen(3000, () => console.log("Server running on port 3000!"));
