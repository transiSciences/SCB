exports.run = (Client, message, args) => {
  message.channel.send("Pong ! `" + Client.ping + "ms`");
}

exports.conf = {
  "enable": true,
  "permLevel": 0
}

exports.help = {
  "name": "ping",
  "version": "1.0.0",
  "description": "Permet de connaitre le ping du bot",
  "usage": "?ping"
}
