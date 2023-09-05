import path from 'node:path';
import express from 'express';
import mongoose from 'mongoose';
import { router } from './router';

import http from 'node:http';
import { Server } from 'socket.io';

const app = express();
const server = http.createServer(app);
export const io = new Server(server);


mongoose.connect('mongodb://127.0.0.1:27017')
  .then(() => {
    const port = 3001;


    app.use((req, res, next) => {
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Allow-Methods', '*');
      res.setHeader('Access-Control-Allow-Headers', '*');

      next();
    });

    app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));
    app.use(express.json());
    app.use(router);

    server.listen(port, () => {
      console.log(`server is runing on http://localhost:${port}`);
    });

  })

  .catch(() => console.log('Erro ao conectar ao servidor'));
