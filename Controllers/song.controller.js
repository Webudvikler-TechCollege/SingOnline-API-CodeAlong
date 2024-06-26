import express from 'express';
import SongModel from '../Models/song.model.js';
export const SongController = express.Router();

SongController.get('/songs', async (req, res) => {
	const data = await SongModel.getAllRecords()
	res.status(200).send(data)
});

SongController.get('/songs/:id', async (req, res) => {
	const data = await SongModel.getRecordById(req.params.id)
	res.status(200).send(data);
});

SongController.post('/songs', async (req, res) => {
	const data = await SongModel.createRecord(req.body)
	res.status(201).send(data)
});
