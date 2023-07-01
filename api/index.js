const express = require('express');

const app = express();

app.get('/', (req, res) => {
  return res.json({
    success: true,
    message: "Sucesso!"
  });
});

module.exports = app;
