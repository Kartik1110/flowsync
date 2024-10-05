import express from 'express';

const app = express();

app.post("/hooks/catch/:userId/:zapId", (req, res) => {
    const { userId, zapId } = req.params;

    console.log(`User ${userId} has a new zap with id ${zapId}`);

    res.status(200).send();
});

export default app;