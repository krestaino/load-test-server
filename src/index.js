import cors from 'cors';
import express from 'express';

require('dotenv').config()

const { SERVER_NAME, SERVER_PORT } = process.env;

const api = express();
api.use(cors());

api.get('/test', async ({ res }) => {
  setTimeout(async () => res.send({
    server: SERVER_NAME,
    status: "success"
  }), 5000);
});

api.listen(SERVER_PORT, () => console.info('Server: Accepting connections at http://localhost:' + SERVER_PORT));