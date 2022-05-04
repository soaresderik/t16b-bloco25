const express = require('express');

const app = express();

const PORT = process.env.PORT || 3001;

app.get('/', (req, res) => {
  res.status(200).json({ ok: true, port: PORT })
})

app.listen(PORT, () => console.log(`Running on port ${PORT}`));