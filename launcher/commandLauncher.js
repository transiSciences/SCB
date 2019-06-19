const reqCommand = (command) => require(`../commands/${command}.js`);
const fs = require('fs');
const chalk = require('chalk');
const date = require('s-date');
const settings = require('../assets/settings.json');
const log = (message) => {
  console.log(`[${date(`{dd}/{mm}/{yyyy} {h24}:{Minutes}:{Seconds}`, new Date())}] ${message}`);
}

module.exports = (Client, connexion, Discord) => {
  fs.readdir("./commands/", (err, files) => {
    if(err) throw err;

    log(chalk.blue(`Loading a total of ${files.length} commands.`));
    files.forEach(f => {
        const props = require(`../commands/${f}`);
        log(chalk.green(`Loading command ${props.help.name} (v${props.help.version}).`));
    });
  })

  Client.on("message", message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm" || message.channel.type === "group") return;
    if(!message.content.indexOf(settings.prefix) === 0) return;

    const args = message.content.slice(settings.prefix.lenght).trim().split(/ +/g);
    const command = args.shift().toLowerCase().replace(settings.prefix, "");

    try {
      switch (getPerm(message)) {
        case 4:
          reqCommand(command).run(Client, message, args, connexion, Discord);
          break;

        default:
          if(reqCommand(command).conf.enable && reqCommand(command).conf.permLevel <= getPerm(message)) reqCommand(command).run(Client, message, args);
      }
    } catch (err) {}
  })

  function getPerm(message) {
    if(message.author.id === settings.OWNERID[0] || message.author.id === settings.OWNERID[1]) return 4;
    //if(message.author.id === settings.DEVID[0]) return 3;
    else if(message.guild.member(message.author).hasPermission("MANAGE_GUILD")) return 2;
    else if(message.guild.member(message.author).hasPermission("MUTE_MEMBERS")) return 1;
    else return 0;
  }
}
