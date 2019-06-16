const chalk = require("chalk");
const settings = require("../assets/settings.json");
const date = require('s-date');

const log = message => {
    console.log(`[${date(`{dd/mm/yyyy h24:Minutes:Secondes}`, new Date());}] ${message}`);
};

module.exports = Client => {
  log(chalk.blue(`Logged in as: ${Client.user.tag} ${settings.version} ${settings.lang}`));
   Client.user.setActivity("?help pour les commandes !");
}
