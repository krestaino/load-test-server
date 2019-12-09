import cors from 'cors';
import express from 'express';

const SERVER_PORT = 1337;

const api = express();
api.use(cors());

api.get('/', async ({ res }) => {
  setTimeout(async () => res.send({ status: "success" }), 5000);
});

api.listen(SERVER_PORT, () => console.info('Server: Accepting connections at http://localhost:' + SERVER_PORT));