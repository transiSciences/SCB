const Discord = require('discord.js');

exports.run = (Client, message, args) => {
  var liste_embed = new Discord.RichEmbed()
   .setColor('RANDOM')
   .setTitle(`Liste des Réactions et Réponses automatique.`)
   .setThumbnail(`${Client.user.avatarURL}`)
   .addBlankField(true)
   .addField("Réactions automatiques :",'- Kappa\n- Hehe\n- IDC\n- SCP-682 (ou "682")\n- Classe-D\n- SCP-096 (ou "096")\n- Safe\n- Euclid\n- Keter\n- XK ')
   .addBlankField(true)
   .addField("Réponses automatiques :","- Skyrim\n- DukeNukem\n- DukeNukem2\n- G-Man\n- Price\n- Halo\n- AlanWake\n- MortalKombat\n- Chapelière\n- Vaas")
   .setFooter("Les auto-réponses n'ont pas encore été implémentées !")
   .setTimestamp()
   message.channel.send(liste_embed)
}

exports.conf = {
  "enable": false,
  "permLevel": 0
}

exports.help = {
  "name": "liste",
  "version": "0.0.2",
  "description": "Permet de connaitre la liste d'auto-réponse du bot",
  "usage": "?liste"
}
