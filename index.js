const express = require('express');
const cool = require('cool-ascii-faces');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3030;
const server = express();

server.use(bodyParser.json());

server.get('/', (req, res) => {
  const index = Math.floor(Math.random() * 10);
  res.status(200);
  res.send(cool.faces[index]);
});

server.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});