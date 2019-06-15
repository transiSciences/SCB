const reqEvent = (event) => require(`../events/${event}.js`);

module.exports = Client => {
  Client.on("ready", () => reqEvent("ready")(Client));
}
