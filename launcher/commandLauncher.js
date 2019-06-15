const reqCommand = (command) => require(`../commands/${command}.js`);
const settings = require('../settings.json');
const fs = require("fs");
const chalk = require("chalk");

const log = message => {
    console.log(`[${moment().format('DD-MM-YYYY HH:mm:ss')}] ${message}`);
};

module.exports = Client => {
  fs.readdir("../commands/", (err, files) => {
    if(err) return console.error(err);

    log(chalk.blue(`Chargement de ${files.length} commandes.`));
    files.forEach(f => {
        const props = require(`../commands/${f}`);
        log(chalk.green(`Loading command ${props.conf.name}.`));
    });
  })

  Client.on("message", message => {
    if(message.author === Client.user) return;
    if(message.channel.type === "dm" || message.channel.type === "group") return;
    if(!message.content.indexOf(settings.prefix) === 0) return;

    const args = message.content.slice(settings.prefix.lenght).trim().split(/ +/g);
    const command = args.shift().toLowerCase().replace(settings.prefix, "");

    try {
      switch (getPerm(message)) {
        case 4:
          reqCommand(command).run(Client, message, args);
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
