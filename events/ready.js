module.exports = Client => {
  Client.channels.get('573138918044598282').send("Je suis connecté.");
   Client.user.setActivity("?help pour les commandes !");
}
