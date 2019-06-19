exports.run = (Client, message, args) => {
  var changelog_embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTitle(`Changelog de ${Client.user.username}`)
    .setDescription(`Les changelog du Client à travers ses mises à jours.`)
    .setThumbnail(`${Client.user.avatarURL}`)
    .addBlankField(true)
    .addField("Changelog version 1.6 :", "- Plein de nouvelles commandes dans \"?liste\" !\n- Ajout d'une nouvelle commande ! \"?emoji list\" !\n- Optimisation générale du code.")
    .addField("Changelog version 1.6.1 :", "- Ajout de nouvelles commandes dans \"?liste\" et d'une nouvelle interaction.\n- Adieu \"?emoji list\" ! Malheureusement la commande était trop instable, j'ai du la retirer.")
    .addField("Changelog version 1.6.2 :", "- Ajout de la commande \"?je participe\" pour participer au prochain event !")
    .addField("Changelog version 1.6.3","- Ajout de plusieurs réactions automatique \"?liste\"\n- Ajout des logs, je vous vois **tous**.\n- Ajout de deux commandes d'intéractions un peu... Hot : \"?suck\" et \"?fuck\" ")
    .addField("Changelog version 1.6.4", "- Réctification d'erreurs et optimisation générale du code.\n- Les joueurs non RP X ne peuvent plus utiliser les intéractions NSFW.\n- AJout de la commande \"?je participe plus\" pour ne plus participer au prochain event RP.")
    .setFooter(Client.user.tag)
    .setTimestamp()
  message.channel.send(changelog_embed)
}

exports.conf = {
  "enable": true,
  "permLevel": 0
}

exports.help = {
  "name": "changelog",
  "version": "1.0.0",
  "description": "Affiche le changelog du bot",
  "usage": "?changelog"
}
