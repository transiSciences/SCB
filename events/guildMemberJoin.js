const Discord = require('discord.js');

module.exports = async(guild, member) => {
  guild.channels.get('573138918044598282').send(`Bienvenue à la nouvelle Classe-D ${member.name} sur le site !`);

  var join_embed60 = new Discord.RichEmbed()
    .setTitle("**Confidentiel** Message du Site Reborn")
    .setColor(guild.roles.get('573135489192820742').hexColor())
    .setDescription("Bienvenue à toi sur ce site !\nSi tu as des questions, n'hésite pas à les poser au staff ou à te renseigner dans les channels informations\nBonne continuation à toi,\n\n**[Thaumiel](http://fondationscp.wikidot.com/security-clearance-levels)**, Directeur du site.")
    .setThumbnail(guild.iconURL)
    .setFooter("ℹ️ Ce message va être détruit dans 1 minute")
    .setTimestamp()

  var join_embed30 = new Discord.RichEmbed()
    .setTitle("**Confidentiel** Message du Site Reborn")
    .setColor(guild.roles.get('573135489192820742').hexColor())
    .setDescription("Bienvenue à toi sur ce site !\nSi tu as des questions, n'hésite pas à les poser au staff ou à te renseigner dans les channels informations\nBonne continuation à toi,\n\n**[Thaumiel](http://fondationscp.wikidot.com/security-clearance-levels)**, Directeur du site.")
    .setThumbnail(guild.iconURL)
    .setFooter("⚠️ Ce message va être détruit dans 30 secondes")
    .setTimestamp()

  var join_embed15 = new Discord.RichEmbed()
    .setTitle("**Confidentiel** Message du Site Reborn")
    .setColor(guild.roles.get('573135489192820742').hexColor())
    .setDescription("Bienvenue à toi sur ce site !\nSi tu as des questions, n'hésite pas à les poser au staff ou à te renseigner dans les channels informations\nBonne continuation à toi,\n\n**[Thaumiel](http://fondationscp.wikidot.com/security-clearance-levels)**, Directeur du site.")
    .setThumbnail(guild.iconURL)
    .setFooter("🚫 Ce message va être détruit dans 15 secondes")
    .setTimestamp()

  var join_embed5 = new Discord.RichEmbed()
    .setTitle("**Confidentiel** Message du Site Reborn")
    .setColor(guild.roles.get('573135489192820742').hexColor())
    .setDescription("Bienvenue à toi sur ce site !\nSi tu as des questions, n'hésite pas à les poser au staff ou à te renseigner dans les channels informations\nBonne continuation à toi,\n\n**[Thaumiel](http://fondationscp.wikidot.com/security-clearance-levels)**, Directeur du site.")
    .setThumbnail(guild.iconURL)
    .setFooter("❌ Ce message va être détruit dans 5 secondes")
    .setTimestamp()


  var targetToMessage = await member.CreateDM().sendMessage(join_embed60).setTimeout(() => {
    targetToMessage.edit(join_embed30).setTimeout(() => {
      targetToMessage.edit(join_embed15).setTimeout(() => {
        targetToMessage.edit(join_embed5).setTimeout(() => {
          targetToMessage.delete();
          member.deleteDM();
        }, 5);
      }, 10);
    }, 15);
  }, 30);
}
