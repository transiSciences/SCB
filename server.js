const express = require('express');
const path = require('path');
const chalk = require('chalk');
const app = express();

const log = message => {
    console.log(`[${moment().format('DD-MM-YYYY HH:mm:ss')}] ${message}`);
};

app.get('/', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, 'web/index.html'));
})

app.listen(50451, () => {
  log(chalk.blue("Running on port 50451"));
})

app.use('./api/discord.js', require('./api/discord.js'));
app.use('./SCB.js', require('./SCB.js'));

app.use((err, req, res, next) => {
  switch (err.message) {
    case 'NoCodeProvided':
      return res.status(400).send({
        status: 'ERROR',
        error: err.message,
      });
    default:
      return res.status(500).send({
        status: 'ERROR',
        error: err.message,
      });
  }
});
