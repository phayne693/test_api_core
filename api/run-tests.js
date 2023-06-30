import express from 'express';
import supertest from 'supertest';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const request = supertest(app);

app.post('/run-tests', (req, res) => {
  // Coloque aqui o código dos seus testes Mocha
  describe('Users', () => {
    it('POST /TK-PROJECT', () => {
      let data = {
        secretKey: process.env.SECRET_KEY,
        boundId: process.env.BOUND_ID
      };

      request.post('/oauth/projects').send(data).end((err, response) => {
        if (err) {
          console.error(err);
          return res.status(500).json({ error: 'Erro ao executar os testes' });
        }
        console.log(response.body.data.token);
        return res.json({ message: 'Testes executados com sucesso' });
      });
    });
  });
});

// Inicie o servidor na porta desejada
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
