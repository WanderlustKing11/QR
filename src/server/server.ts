import express from 'express';
import os from 'node:os';

import config from './config';

const server = express();

server.use(express.static('dist'));

server.set('view engine', 'ejs');

server.use('/', (req, res) => {
    res.render('index', {
      content: "Sending this <em>data</em> via <strong>EJS</strong>",
    });
});

server.listen(Number(config.PORT), config.HOST, () => {
  console.info(
    `Express server is listening at http://${config.SERVER_URL}`,
    `free Mem: ${os.freemem() / 1024 / 1024}`
  );
});