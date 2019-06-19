const reqReact = (react) => require(`../react/${react}.js`);
const fs = require('fs');
const chalk = require('chalk');

module.exports = (Client, log) => {
  fs.readdir('./react', (err, files) => {
    if (err) throw err;

    log(chalk.blue(`Loading a total of ${files.length} reactions`));
    files.forEach(f => {
      const props = require(`../react/${f}`);
      log(chalk.green(`Loading reaction ${props.help.name} (v${props.help.version}).`));
    })
  })

  Client.on('message', message => {
    if(message.author === Client.user) return;
    if(message.channel.type === "dm" || message.channel.type === "group") return;

    const react = message.content.trim().split(/ +/g).toLowerCase()[0];

    try {
      reqReact(react).run(Client, message);
    } catch (err) {}
  })
}
