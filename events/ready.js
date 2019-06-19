const chalk = require('chalk');
const date = require('s-date');
const settings = require('../assets/settings');
const log = message => {
    console.log(`[${date(`{dd}/{mm}/{yyyy} {h24}:{Minutes}:{Seconds}`, new Date())}] ${message}`);
};

module.exports = (Client, connexion) => {
  function arrayHas(array, value) {
    return array.filter(element => {
      return element === value;
    })
  };

   Client.user.setActivity("Loading...", {type: "PLAYING"});

   connexion.query("SELECT `userid` FROM `users`;", (err, result) => {
     let targetToBotUsers = Array();
     Client.users.forEach(user => {
      if(!user.bot)
      targetToBotUsers.push(user.id);
     });
     log(chalk.blue(`${targetToBotUsers.length} users found`));
     if (err) throw err;

     let targetToDbUsers = Array();
     let targetToUsersAdd = Array();
     let i = 0;

     for (i = 0; i < result.length; i++) {
       targetToDbUsers.push(result[i].userid);
     }
     log(chalk.blue(`${targetToDbUsers.length} stored users found in database`));

     Client.users.forEach(user => targetToUsersAdd.push(user.id));

     if(targetToBotUsers.length === targetToDbUsers.length) return log(chalk.yellow("0 mismatch erros / No Mismatch !"));

     else if(targetToBotUsers.length < targetToDbUsers.length) {
       log(chalk.blue("Some users who aren't on the bot anymore has been found, removing..."));
       for (i = 0; i < targetToDbUsers.length; i++) {
         if (!arrayHas(targetToBotUsers, targetToDbUsers[i])) connexion.query("DELETE FROM `users` WHERE `userid` = '" + targetToDbUsers[i] + "'; ", (err, result));
       }

       log(chalk.yellow(`${targetToDbUsers.length} users removed from database`));
       connexion.query("SELECT `userid` FROM `users`;", (err, result) => {log(chalk.blue(`${targetToDbUsers.length} stored users found in database`))});
       return;
     }

     for (i = 0; i < targetToDbUsers.length; i++) {
       targetToUsersAdd = arrayRemove(targetToUsersAdd, targetToDbUsers[i]);
     }

     for (i = 0; i < targetToUsersAdd.length; i++) {
       connexion.query("INSERT INTO `users` (userid, blocked, iaaccess, premium) VALUES ('" + targetToUsersAdd[i] + "', false, false, false);", (err, result));
     }

     log(chalk.yellow(`${targetToUsersAdd.length} users added to database`));
     connexion.query("SELECT `userid` FROM `users` WHERE 1;", (err, result) => {log(chalk.blue(`${targetToDbUsers.length} stored users found in database`))})
   });

   log(chalk.blue(`Logged in as: ${Client.user.tag} ${settings.version} ${settings.lang}`))
   Client.user.setActivity("?help pour les commandes !", {type: "WATCHING"});
}
