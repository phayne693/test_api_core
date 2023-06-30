const { exec } = require('child_process');

// Defina a função para executar o script "test"
const runTest = async (req, res) => {
  exec('npm run test', (error, stdout, stderr) => {
    if (error) {
      console.error(`Erro ao executar o script "test": ${error}`);
      return res.status(500).send('Erro ao executar o script "test"');
    }
    console.log(`Saída do script "test": ${stdout}`);
    return res.status(200).send('Script "test" executado com sucesso');
  });
};