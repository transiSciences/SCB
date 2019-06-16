const chalk = require("chalk");
const moment = require("moment");
const settings = require("../assets/settings.json");

const log = message => {
    console.log(`[${moment().format('DD-MM-YYYY HH:mm:ss')}] ${message}`);
};

module.exports = Client => {
  log(chalk.blue(`Logged in as: ${Client.user.tag} ${settings.version} ${settings.lang}`));
   Client.user.setActivity("?help pour les commandes !");
}
