import cors from 'cors';
import express from 'express';

require('dotenv').config()

const { SERVER_NAME, SERVER_PORT } = process.env;

const api = express();
const response = { server: SERVER_NAME, status: "success" }

api.use(cors());

api.get('/', ({ res }) => {
  res.send(response)
});

api.get('/async', async ({ res }) => {
  setTimeout(async () => res.send(response), 5000);
});

api.listen(SERVER_PORT, () => console.info('Server: Accepting connections at http://localhost:' + SERVER_PORT));