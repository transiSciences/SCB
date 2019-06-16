const reqEvent = (event) => require(`../events/${event}.js`);

module.exports = Client => {
  Client.on("guildMemberJoin", (guild, member) => reqEvent("guildMemberJoin")(guild, member));
  Client.on("ready", () => reqEvent("ready")(Client));
}
