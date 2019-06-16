const express = require('express');
const path = require('path');
const chalk = require('chalk');
const app = express();

const log = message => {
    console.log(`[${moment().format('DD-MM-YYYY HH:mm:ss')}] ${message}`);
};

app.get('/', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, 'index.html'));
})

app.listen(50451, () => {
  log(chalk.blue("Running on port 50451"));
})
