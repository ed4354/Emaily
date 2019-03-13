const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send({ Wassup: '( ▀ ͜͞ʖ▀) (ツ) ( ͡° ͜ʖ ͡°) ' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);

// localhost:5000
