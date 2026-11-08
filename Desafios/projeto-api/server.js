const express = require('express');
const app = express();
const PORT = process.brv || 3000;

app.get('/', (req, res) => {
  res.json({ mensagem: '🚀 API rodando com sucesso dentro do Docker!' });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});