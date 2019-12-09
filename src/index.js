import cors from 'cors';
import express from 'express';
import os from 'os';

const SERVER_PORT = 80;
const api = express();
const response = { server: os.hostname(), status: "success" }

api.use(cors());

api.get('/', ({ res }) => {
  res.send(response)
});

api.get('/async', async ({ res }) => {
  setTimeout(async () => res.send(response), 5000);
});

api.listen(SERVER_PORT, () => console.info('Server: Accepting connections at http://localhost:' + SERVER_PORT));