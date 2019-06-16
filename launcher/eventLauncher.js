const reqEvent = (event) => require(`../events/${event}.js`);

module.exports = Client => {
  Client.on("guildMemberJoin", (guild, member) => reqEvent("guildMemberJoin")(guild, member));
  Client.on("guildMemberLeave", (guild, member) => reqEvent("guildMemberLeave")(guild, member));
  Client.on("ready", () => reqEvent("ready")(Client));
}
