import express from 'express';
export const StatusController = express.Router();

StatusController.get("/status", async (req, res) => {
	res.status(201).send({ status: 'OK' });
})