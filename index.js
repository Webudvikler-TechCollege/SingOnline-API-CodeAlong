import express from 'express'
import dotenv from 'dotenv'
import { SongController } from './Controllers/song.controller.js'
import { StatusController } from './Controllers/status.controller.js';

dotenv.config()

const app = express()
const port = process.env.PORT
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
	res.send('Velkommen til min sangbog')
})

app.use(SongController)
app.use(StatusController)

app.listen(port, () => {
	console.log(`Webserver is running now on http://localhost:${port}`);
})