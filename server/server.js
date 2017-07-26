require('./config/config');

const express = require('express');

var app = express();
const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Started on port ${port}`);
});
