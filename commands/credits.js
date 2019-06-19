const Discord = require('discord.js');
const settings = require('../assets/settings.json');

exports.run = (Client, message, args) => {
  var credits_embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setTitle(`Credits du bot ${Client.user.username}`)
      .addBlankField(true)
      .addField('Le staff de développement du bot', 'transiSciences ▪Dev▪#6105: Développeur et Administrateur du bot.\n\nAsviix#1934: Contributeur')
      .addBlankField(true)
      .addField('La version', `Le bot est actuellement en version ${settings.version}`)
      .addBlankField(true)
      .addBlankField(true)
      .addField("L'hébergement", `**${Client.user.username}** est hébergé sur Raspberry Pi Modèle 3b.`)
      .addBlankField(true)
      .addField('Mentions légales', `Tous droits réservés à transiSciences#6105 et Asviix#1934. Toute reproduction ou copie de ce bot est interdite.\n\n**${Client.user.username}** est sous licence MIT`)
      .setFooter(`Requested by ${message.author.tag} | BOT - SCB ©`, message.author.avatarURL)
      .setTimestamp()
  message.channel.send(credits_embed);
}

exports.conf = {
  "enable": true,
  "permLevel": 0
}

exports.help = {
  "name": "credits",
  "version": "1.0.0",
  "description": "Affiche les credits du bot",
  "usage": "?credits"
}
