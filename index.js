const express = require('express');

const app = express();

const PORT = process.env.PORT || 3001;
const NODE_ENV = process.env.NODE_ENV || 'development';

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Deploy pelo GITHUB 😎' });
});

app.get('/os-cria', (req, res) => {
  res.status(200).json({ ok: '😎', port: PORT });
});

app.get('/env', (req, res) => {
  res.status(200).json({ ok: true, env: NODE_ENV });
});

app.listen(PORT, () => console.log(`Running on port ${PORT}`));
