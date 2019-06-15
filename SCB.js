//#region------------------CONSTANTES DU Client------------------\\

const Discord = require('discord.js')
const Client = new Discord.Client()
const settings = require("./settings.json")
//#endregion

//#region------------------INITIALISATION DES HANDLERS------------------\\

require("./eventLauncher/eventLauncher.js")(Client);
//#endregion

//#region------------------COMMANDES INUTILES------------------\\

Client.on('message', message => {
   if (message.content === prefix + 'ping') {
   message.channel.send("Pong ! `" + Client.ping + "ms`")
   .catch((err) => {
   console.error(err)})
  }
})
//Commande ?ping

//#endregion

//#region------------------RÉACTIONS ET MESSAGES AUTOMATIQUES------------------\\

Client.on('message', message => {
   if (message.content === prefix + 'liste') {
   var liste_embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTitle(`Commandes de Réactions et Réponses automatique.`)
    .setThumbnail(`${Client.user.avatarURL}`)
    .addBlankField(true)
    .addField("Réactions automatiques :",'- Kappa\n- Hehe\n- IDC\n- SCP-682 (ou "682")\n- Classe-D\n- SCP-096 (ou "096")\n- Safe\n- Euclid\n- Keter\n- XK ')
    .addBlankField(true)
    .addField("Réponses automatiques :","- Skyrim\n- DukeNukem\n- DukeNukem2\n- G-Man\n- Price\n- Halo\n- AlanWake\n- MortalKombat\n- Chapelière\n- Vaas")
    .setTimestamp()
    message.channel.send(liste_embed)
  }
})
//Commande ?liste

Client.on('message', message => {
  const args = message.content.trim().split(/ +/g)
  const command = args.shift().toLowerCase()
   if (command === 'kappa') { message.react(':Kappa:432470712410701824');message.channel.send('<:LeKappa:432470712410701824>')}
}) //Commandes Réactions et Réponses automatiques

Client.on('message', message => {
  const args = message.content.trim().split(/ +/g)
  const command = args.shift().toLowerCase()
   if (command === 'hehe') { message.react(':Ainsley:434652828573892610')}
   if (command === 'idc') { message.react(':IDC:431121882461372438')}
   if (command === 'scp-682') { message.react(':SCP682:431142635382505473')}
   if (command === '682') { message.react(':SCP682:431142635382505473')}
   if (command === 'classe-d') { message.react(':ClasseD:431130683906326547')}
   if (command === 'scp-096') { message.react(':SCP096:431129031098892289')}
   if (command === '096') { message.react(':SCP096:431129031098892289')}
   if (command === 'safe') { message.react(':Safe:427881795724509184')}
   if (command === 'euclid') { message.react(':Euclid:427881795325919243')}
   if (command === 'keter') { message.react(':Keter:427881795275718657')}
   if (command === 'xk') { message.react(':XK:427881795686760458')}

})
//Commandes Réactions automatiques

Client.on('message', message => {
  const args = message.content.trim().split(/ +/g)
  const command = args.shift().toLowerCase()
   if (command === 'skyrim') { message.channel.send('I used to be an adventurer like you, then I took an arrow in the knee')}
   if (command === 'dukenukem') { message.channel.send('I am here to kickass and chew bubblegum... And I\'m all out of bubble-gum.')}
   if (command === 'dukenukem2') {message.channel.send("Mes couilles sur ton nez, t'auras l’air d'un dindon")}
   if (command === 'g-man') { message.channel.send('The right man in the wrong place can make all the difference in the world.')}
   if (command === 'price') { message.channel.send('The healthy human mind doesn\'t wake up in the morning thinking this is its last day on Earth. But I think that\'s a luxury, not a curse. To know you\'re close to the end is a kind of freedom. Good time to take... inventory.')}
   if (command === 'halo') { message.channel.send('A hero need not speak. When he is gone, the world will speak for him.')}
   if (command === 'alanwake') { message.channel.send('If our lives are already written, it would take a courageous man to change the script.')}
   if (command === 'mortalkombat') {message.channel.send('Finish him!')}
   if (command === 'chapelière') { message.channel.send('C\'est **ELLE**, Paysan !')}
   if (command === 'vaas') {message.channel.send("Est-ce que je t'ai déjà donné la définition... du mot Folie ?")}
})
//Commandes Réponses automatiques

//#endregion

//#region------------------COMMANDES DIVERSES------------------\\

Client.on('message', message => {
 if (message.content === prefix + 'credit') {
 var credits_embed = new Discord.RichEmbed()
                    .setColor('RANDOM')
                    .setTitle(`Les développeurs du ${Client.user.username}`)
                    .setThumbnail(`${Client.user.avatarURL}`)
                    .addBlankField(true)
                    .addField("Les développeurs :","Asviix : Codeur et manager du Client.\n\ntransiSciences : Codeur et Béta-Testeur.\n\nValen : Béta-Testeur.")
                    .addBlankField(true)
                    .addField("Version :","Le Client est actuellement en version " + config.version + ".")
                    .addBlankField(true)
                    .addField("Mentions légales :","Tout droits réservés à Asviix#1934, toute réutilisation de ce Client est interdite.\nSCP-FR Client est sous liscence MIT.")
                    .setFooter(Client.user.username)
                    .setTimestamp()
             message.channel.send(credits_embed)
 }
})
//Commande ?credit

Client.on('message', message => {
 if (message.content === prefix + 'changelog') {
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
                    .setFooter(Client.user.username)
                    .setTimestamp()
             message.channel.send(changelog_embed)
             message.delete()
 }
})
//Commande ?changelog

Client.on('message', message => {
 if (message.content === prefix + 'comment ça marche') {
 var cçm_embed = new Discord.RichEmbed()
                    .setColor('RANDOM')
                    .setTitle(`Comment marche ${Client.user.username} ?`)
                    .setThumbnail(`${Client.user.avatarURL}`)
                    .addBlankField(true)
                    .addField("Le Codage :", "**SCP-FR Client** est codé sous Java avec Node.js et discord.js.")
                    .addBlankField(true)
                    .addField("L'Hébergement :","Je suis hébergé sur le Raspberry Pi personnel de Asviix, je tourne donc 24/7.")
                    .setFooter(Client.user.username)
                    .setTimestamp()
             message.channel.send(cçm_embed)
 }
})
//Commande ?comment ça marche

Client.on('message', message => {
 if (message.content === prefix + 'explications') {
 var explications_embed = new Discord.RichEmbed()
                    .setColor('RANDOM')
                    .setTitle(`Comment marche ${Client.user.username} ?`)
                    .setThumbnail(`${Client.user.avatarURL}`)
                    .addBlankField(true)
                    .addField("Présentation :", "Bienvenue à toi sur le " + message.guild.name + "! Des explications sont disponibles dans les 4 premiers channels de la catégorie \"Règles/Annonces\" !\nSi tu as la moindre question n'hésite pas à demander à un développeur connecté !")
                    .addBlankField(true)
                    .addField("Le Fonctionnement","Serveur Discord : Le RP du discord marche avec des tests qu'il faudra passer pour avoir les jobs en questions, je t'invite à aller dans <#427871700651081740> pour plus d'explications :wink:.\nServeur Gmod : Le Serveur Gmod marche de la même manière, mais il faudra directement demander au staff pour passer les tests.")
                    .setFooter(Client.user.username)
                    .setTimestamp()
             message.channel.send(explications_embed)
 }
})
//Commande ?explications

Client.on('message', message => {
 if (message.content === prefix + 'server info') {
 var sinfo_embed = new Discord.RichEmbed()
                    .setColor('RANDOM')
                    .setTitle(`Les infos de ${message.guild.name}`)
                    .setThumbnail(`${Client.user.avatarURL}`)
                    .addBlankField(true)
                    .addField("ID du Serveur :", message.guild.id)
                    .addField("Propriétaire :", message.guild.owner)
                    .addField("Nombre de membres :", message.guild.memberCount)
                    .addField("Nombre d'Humains : ", message.guild.memberCount - message.guild.members.filter(m => m.user.Client).size, true)
                    .addField("Nombre de Clients : ", message.guild.members.filter(m => m.user.Client).size, true)
                    .addField("Nombre de rôles :", message.guild.roles.size, true)
                    .addField("Nombre d'émojis :", message.guild.emojis.size, true)
                    .addField("Serveur créé le :", message.guild.createdAt)
                    .addField("La région du serveur :", message.guild.region)
                    .addField("L'URL de l'icône du serveur :", message.guild.iconURL)
                    .setFooter(Client.user.username)
                    .setTimestamp()
             message.channel.send(sinfo_embed)
 }
})
//Commande ?server info

Client.on('message', message => {
 if (message.content === prefix + 'help') {
 var help_embed = new Discord.RichEmbed()
                .setColor('#C11C17')
                .setTitle(`Les commandes disponibles du Client ${Client.user.username}`)
                .setDescription(`Le prefixe du Client est: "?" `)
                .setThumbnail(`${Client.user.avatarURL}`)
                .addBlankField(true)
                .addField(":paperclip: Autres","`\"?help\"` => Affiche ce message.\n`\"?ping\"` => Teste le Client, il répond \"!Pong !\" si il est up.\n`\"?credit\"` => Affiche les créateurs du Client.\n`\"?comment ça marche\"` => Affiche comment le Client à été créé et comment il fonctionne.\n`\"?changelog\"` => Affiche la dernière mise à jour, ses changements et la version du Client.\n`\"?server info\"` => Donne des informations sur le serveur.\n`\"?explications\"` => Donne les explications du serveur pour les nouveaux.")
                .addBlankField(true)
                .addField(":punch: Intéractions entre utilisateurs","`\"?slap @user\"` => Donne une gifle à un joueur.\n`\"?punch @user\"` => Donne un coup de poing à un joueur.\n`\"?kiss @user\"` => Donne un bisous à un joueur.\n`\"?shoot @user\"` => Pour tirer sur les joueurs.\n`\"?pat @user\"` => Donnez une caresse à un joueur.\n `\"?suck\"` => Faites une magnifique pipe au joueur choisi.\n`\"?fuck\"` Pour #### le joueur choisi.\n**Vous devez être un joueur RP X pour utiliser les commandes NSFW !**")
                .addBlankField(true)
                .addField(":question: Commandes diverses", "`\"?liste\"` => Affiche la liste des réactions et réponses automatiques disponible.\n`\"?je participe\"` => Confirme votre participation au prochain RP.\n`\"?je participe plus\"` => Annule votre participation au prochain RP.")
                .addBlankField(true)
                .addField(":newspaper: Recrutements", "`\"?recrutez-moi\"` => Active votre recrutement pour un rôle RP.\n`\"?fin-recrutement\"` => Marque la fin de votre recrutement une fois que vous l'avez passé.\n`\"?tests\"` => Vous donne tout les rôles disponibles pour les recrutements.")
                .addBlankField(true)
                .addField(":hammer: Modération (Commandes uniquement utilisables par le staff !)", "`\"?help-staff\"` => Vous donne les commandes de staff disponibles\n **Rôles autorisés :** Owner; Administrateur.")
                .setFooter(Client.user.username)
                .setTimestamp()
            message.author.send(help_embed)
            message.channel.send('Les commandes disponibles vous ont été envoyées en MP '+ message.author +'.')
            message.delete()
            .catch((err) => {
            console.error(err)})
 }
})
//Commande ?help

Client.on('message', message => {
 if (message.content === prefix + 'help-staff') {
 let staffRole = message.guild.roles.find("name", "Staff")
 if(message.member.roles.has(staffRole.id)){
                var helpstaff_embed = new Discord.RichEmbed()
                .setColor('#C11C17')
                .setTitle(`Les commandes de modération disponibles du Client ${Client.user.username}`)
                .setDescription(`Le prefixe du Client est: "?" `)
                .setThumbnail(`${Client.user.avatarURL}`)
                .addBlankField(true)
                .addField(":hammer: Modération", "Le Client ne dispose pour l'instant d'aucune commande de modération, mais elles arrivent vite, promis ! :kiss:")
                .addBlankField(true)
                .addField(":performing_arts: Roleplay" ,"`\"!fin-rp\"` => Démarque la fin d'une action RP, à utiliser seulement à la fin des RP.\n**Rôles autorisés :** Owner; Maître du Roleplay")
                .setFooter(Client.user.username)
                .setTimestamp()
                message.author.send(helpstaff_embed)
                message.delete()}
        else message.channel.send('Hmm... Vous n\'avez pas le droit d\'utiliser ça' + message.author +'.'); message.react('❌')
        .catch((err) => {
        console.error(err)})
 }
})
//Commande ?help-staff {Staff}

//#endregion

//#region------------------INTERACTIONS UTILISATEURS------------------\\

Client.on('message', message => {
     if (message.content === prefix + 'slap') {
     let user = message.mentions.members.first()
     message.channel.send("Vous avez giflé "+ user +".")
     .catch((err) => {
     console.error(err)})
 }
})
//Commande ?slap @user

Client.on('message', message => {
     if (message.content === prefix + 'punch') {
     let user = message.mentions.members.first()
     message.channel.send("Vous avez frappé "+ user +".")
     .catch((err) => {
     console.error(err)})
 }
})
//Commande ?punch @user

Client.on('message', message => {
     if (message.content === prefix + 'kiss') {
     let user = message.mentions.members.first()
     message.channel.send("Vous avez embrassé "+ user +".")
     .catch((err) => {
     console.error(err)})
 }
}) //Commande ?kiss @user

Client.on('message', message => {
     if (message.content === prefix + 'shoot') {
     let user = message.mentions.members.first()
     message.channel.send("Vous mitraillez "+ user +".")
     .catch((err) => {
     console.error(err)})
  }
})
//Commande ?shoot @user

Client.on('message', message => {
     if (message.content === prefix + 'pat') {
     let user = message.mentions.members.first()
     message.channel.send("Vous carressez "+ user +".")
     .catch((err) => {
     console.error(err)})
  }
})
//Commande ?pat @user

Client.on('message', message => {
     if (message.content === prefix + 'suck') {
     let RPXRole = message.guild.roles.find("name", "Joueur RP X")
     if(message.member.roles.has(RPXRole.id)){; let user = message.mentions.members.first(); message.channel.send("Vous sucez "+ user +".")}
     else message.channel.send("Tu n'est pas joueur RP X !")
     .catch((err) => {
     console.error(err)})
  }
})
//Commande ?suck @user

Client.on('message', message => {
     if (message.content === prefix + 'fuck') {
     let RPXRole = message.guild.roles.find("name", "Joueur RP X")
     if(message.member.roles.has(RPXRole.id)){; let user = message.mentions.members.first(); message.channel.send("Vous faites l'amour à "+ user +".")}
     else message.channel.send("Tu n'est pas joueur RP X !")
     .catch((err) => {
     console.error(err)})
  }
})
//Commande ?fuck @user

//#endregion

//#region------------------COMMANDES STAFF------------------\\

Client.on('message', message => {
 if (message.content === prefix + 'rappel') {
     message.delete()
   if(message.member.roles.find("name", "Owner")){; Client.channels.get('427871700651081740').send('N\'oubliez pas de regarder les messages épinglés pour plus d\'informations :wink:\nEt aussi que vous pouvez cumuler les rôles, n\'hésitez donc pas à passer d\'autres tests !')}
   else message.channel.send('Hmmm... Vous n\'avez pas le droit d\'utiliser ça '+ message.author +'.'); message.react('❌')
   .catch((err) => {
   console.error(err)})
 }
})
//Commande ?rappel {Owner}

Client.on('message', message => {
 if (message.content === prefix + 'fin-rp') {
 var rp_embed = new Discord.RichEmbed()
                .setColor('#C11C17')
                .setTitle(`FIN DE LA SESSION RP`)
                .setThumbnail(`${Client.user.avatarURL}`)
                .addField("Date de fin de la session :", message.createdAt)
                .addField("Fin de session demandée par", message.author.tag)
                .setFooter(Client.user.username)
                .setTimestamp()
        let ownerRole = message.guild.roles.find("name", "Owner")
        let rpRole = message.guild.roles.find("name", "Maître du Roleplay")
        if(message.member.roles.has(ownerRole.id) || message.member.roles.has(rpRole.id)) {; message.channel.send(rp_embed); message.delete()}
        else message.channel.send('Hmmm... Vous n\'avez pas le droit d\'utiliser ça '+ message.author +'.'); message.react('❌')
        .catch((err) => {
        console.error(err)})
 }
})
//Commande ?fin-rp {Owner; Maître du Roleplay}

//#endregion

//#region------------------COMMANDES RP------------------\\

Client.on('message', message => {
  if (message.content === prefix + 'je participe') {
    if(message.member.roles.find("name", "Participant")){; message.channel.send('Tu participe déjà ' + message.author + ' !')}
    else message.member.addRole('442700655774269441'); message.react('✅')
 }
}) //Commande ?je participe

Client.on('message', message => {
  if (message.content === prefix + 'je participe plus') {
    if(message.member.roles.find("name", "Participant")){; message.react('✅'); message.member.removeRole('442700655774269441')}
    else message.react('❌')
 }
})
//Commande ?je participe

//#endregion

//#region------------------TESTS RP------------------\\

Client.on('message', message => {
  if (message.content === prefix + 'recrutez-moi') {
  if(message.member.roles.find("name", "En Recrutement")){; message.channel.send('Ton recrutement est déjà actif ' + message.author + ' !')}
  else message.member.addRole('427441576269185034'); message.channel.send('Recrutement activé ' + message.author + ', Vous pouvez vous rendre dans un channel [#recrutement] libre pour y demander votre recrutement.')
 }
}) //Commande ?recrutez-moi

Client.on('message', message => {
  if (message.content === prefix + 'fin-recrutement') {
    if(message.member.roles.find("name", "En Recrutement")){; message.member.removeRole('427441576269185034'); Client.channels.get('427871700651081740').send('Ton recrutement est terminé '+ message.author +'!')}
    else message.channel.send('Tu veux arrêter ton recrutement '+ message.author +' ? Mais il n\'as même pas encore commencé !')
    .catch((err) => {
    console.error(err)})
 }
})
//Commande ?fin-recrutement

Client.on('message', message => {
 if (message.content === prefix + 'tests') {
    message.channel.send('Les tests disponibles actuellement sont : \n\n```\n?test-ic\n?test-hacker\n?test-eglise\n?test-ntf\n?test-o5\n?test-ads\n?test-fim\n?test-cut\n?test-iut\n?test-utl\n?test-utd\n?test-aut\n?test-utm\n?test-ut\n?test-garde\n?test-superviseur\n?test-cc //Chercheur Confirmé\n?test-chercheur\n?test-ac //Assistant Chercheur\n?test-medecin\n?test-rpx```\n\n **Vous devez avoir le rôle `En Recrutement` pour pouvoir passer les recrutements !**')
 }
})
//Commande ?tests

Client.on('message', message => {
 if (message.content === prefix + 'test-ic') {
 var ic_embed = new Discord.RichEmbed()
                .setColor('#C11C17')
                .setTitle(`Test IC`)
                .setThumbnail(`${Client.user.avatarURL}`)
                .addBlankField(true)
                .addField("Questions :","#1 - Que veut dire IDC ?\n#2 - Quels sont vos intentions ?\n#3 - Quel est votre équipement ?\n#4 - Quel est votre niveau d’accréditation ?\n#5 - Quels SCP connaissez-vous ?\n#6 - Qui est SCP-682 ?\n#7 (Bonus) : Qui est l’O5-1 ?")
                .setFooter(Client.user.username)
                .setTimestamp()
   if(message.member.roles.find("name", "En Recrutement")){
        message.channel.send(ic_embed)
        message.delete()}
   else message.channel.send('Ton recrutement n\'est pas encore activé ' + message.author +'!')
        .catch((err) => {
        console.error(err)})
 }
})
//Commande ?test-ic

Client.on('message', message => {
 if (message.content === prefix + 'test-hacker') {
 var hacker_embed = new Discord.RichEmbed()
                .setColor('#C11C17')
                .setTitle(`Test Hacker`)
                .setThumbnail(`${Client.user.avatarURL}`)
                .addBlankField(true)
                .addField("Questions :","#1 - Quelles sont vos intentions ?\n#2 - Quel est votre équipement ?\n#3 - Quels SCP connaissez-vous ?\n#4 - Quel est votre niveau d’accréditation ?\n#5 - Que devez-vous faire à chaque fois que vous effecutez un hack sur un Ordinateur ou autre ?\n#6 - Qui est SCP-106 ?\n#7 (Bonus) : Et SCP-294 ?")
                .setFooter(Client.user.username)
                .setTimestamp()
   if(message.member.roles.find("name", "En Recrutement")){
        message.channel.send(hacker_embed)
        message.delete()}
   else message.channel.send('Ton recrutement n\'est pas encore activé ' + message.author +'!')
        .ctahc((err) => {
        console.error(err)})
 }
})
//Commande ?test-hacker

Client.on('message', message => {
 if (message.content === prefix + 'test-eglise') {
 var eglise_embed = new Discord.RichEmbed()
                .setColor('#C11C17')
                .setTitle(`Test Église du Dieu Brisé`)
                .setThumbnail(`${Client.user.avatarURL}`)
                .addBlankField(true)
                .addField("Questions :","#1 - De combien de fonds dispose le groupe ?\n#2 - Combien y’as t’il de groupe dedans ? Quels sont leurs noms ?\n#3 - Faites-moi une description de l’un d’eux.\n#4 - Combien ont-ils d’adhérents ?")
                .setFooter(Client.user.username)
                .setTimestamp()
   if(message.member.roles.find("name", "En Recrutement")){
        message.channel.send(eglise_embed)
        message.delete()}
   else message.channel.send('Ton recrutement n\'est pas encore activé ' + message.author +'!')
        .catch((err) => {
        console.error(err)})
 }
})
//Commande ?test-eglise

Client.on('message', message => {
 if (message.content === prefix + 'test-ntf') {
 var ntf_embed = new Discord.RichEmbed()
                .setColor('#C11C17')
                .setTitle(`Test NTF`)
                .setThumbnail(`${Client.user.avatarURL}`)
                .addBlankField(true)
                .addField("Questions :","#1 - Que signifie NTF ?\n#2 - Quel est votre rôle dans la fondation ?\n#3 - Quel est votre équipement ?\n#4 - Quel est votre niveau d’accréditation ?\n#5 - Quels SCP connaissez-vous ?\n#6 - Dans quelles situations vous envoie-t’on ?\n#7 (Bonus) : Qui est l’O5-1 ?")
                .setFooter(Client.user.username)
                .setTimestamp()
   if(message.member.roles.find("name", "En Recrutement")){
        message.channel.send(ntf_embed)
        message.delete()}
   else message.channel.send('Ton recrutement n\'est pas encore activé ' + message.author +'!')
        .catch((err) => {
        console.error(err)})
 }
})
//Commande ?test-ntf

Client.on('message', message => {
 if (message.content === prefix + 'test-o5') {
 var o5_embed = new Discord.RichEmbed()
                .setColor('#C11C17')
                .setTitle(`Test O5`)
                .setThumbnail(`${Client.user.avatarURL}`)
                .addBlankField(true)
                .addField("Questions :","#1 - Quel est le nom complet d’O5 ?\n#2 - Quel est votre niveau d’accréditation ?\n#3 - Combien y’as t’il d’O5 ?\n#4 - Citez-moi en un.\n#5 - Êtes-vous plus gradé qu’un FIM ?\n#6 - Quels sont les SCP que vous connaissez ?\n#7 (Bonus) : Qui est l’O5-2 ?")
                .setFooter(Client.user.username)
                .setTimestamp()
   if(message.member.roles.find("name", "En Recrutement")){
        message.channel.send(o5_embed)
        message.delete()}
   else message.channel.send('Ton recrutement n\'est pas encore activé ' + message.author +'!')
        .catch((err) => {
        console.error(err)})
 }
})
//Commande ?test-o5

Client.on('message', message => {
 if (message.content === prefix + 'test-ads') {
 var ads_embed = new Discord.RichEmbed()
                .setColor('#C11C17')
                .setTitle(`Test ADS`)
                .setThumbnail(`${Client.user.avatarURL}`)
                .addBlankField(true)
                .addField("Questions :","#1 - Quel est votre rôle dans la fondation ?\n#2 - Quel est votre niveau d’accréditation ?\n#3 - Un FIM est-il plus gradé que vous ?\n#4 - Et un O5 ?\n#5 - Quels sont les SCP que vous connaissez ?\n#6 - Qui est SCP-457 ?\n#7 (Bonus) : Qui est SCP-914 ?")
                .setFooter(Client.user.username)
                .setTimestamp()
   if(message.member.roles.find("name", "En Recrutement")){
        message.channel.send(ads_embed)
        message.delete()}
   else message.channel.send('Ton recrutement n\'est pas encore activé ' + message.author +'!')
        .catch((err) => {
        console.error(err)})
 }
})
//Commande ?test-ads

Client.on('message', message => {
 if (message.content === prefix + 'test-fim') {
 var fim_embed = new Discord.RichEmbed()
                .setColor('#C11C17')
                .setTitle(`Test FIM`)
                .setThumbnail(`${Client.user.avatarURL}`)
                .addBlankField(true)
                .addField("Questions :","#1 - Que signifie FIM ?\n#2 - Quand êtes vous autorisé à vous déployer ?\n#3 - Quels sont les SCP que vous connaissez ?\n#4 - Quel est votre équipement ?\n#5 - Un O5 est-il plus gradé que vous ?\n#6 - Et un CUT ?\n#7 (Bonus) : Qui est SCP-294 ?")
                .setFooter(Client.user.username)
                .setTimestamp()
   if(message.member.roles.find("name", "En Recrutement")){
        message.channel.send(fim_embed)
        message.delete()}
   else message.channel.send('Ton recrutement n\'est pas encore activé ' + message.author +'!')
        .catch((err) => {
        console.error(err)})
 }
})
//Commande ?test-fim

Client.on('message', message => {
 if (message.content === prefix + 'test-cut') {
 var cut_embed = new Discord.RichEmbed()
                .setColor('#C11C17')
                .setTitle(`Test CUT`)
                .setThumbnail(`${Client.user.avatarURL}`)
                .addBlankField(true)
                .addField("Questions :","#1 - Que signifie le “C” de CUT ?\n#2 - Quel est votre niveau d’accréditation ?\n#3 - Quel est votre équipement ?\n#4 - Quels SCP connaissez-vous ?\n#5 - Un AUT est-il votre supérieur ?\n#6 - Et un ADS ?\n#7 (Bonus) : Qui est SCP-049 ?")
                .setFooter(Client.user.username)
                .setTimestamp()
   if(message.member.roles.find("name", "En Recrutement")){
        message.channel.send(cut_embed)
        message.delete()}
   else message.channel.send('Ton recrutement n\'est pas encore activé ' + message.author +'!')
        .catch((err) => {
        console.error(err)})
 }
})
//Commande ?test-cut

Client.on('message', message => {
 if (message.content === prefix + 'test-iut') {
 var iut_embed = new Discord.RichEmbed()
                .setColor('#C11C17')
                .setTitle(`Test IUT`)
                .setThumbnail(`${Client.user.avatarURL}`)
                .addBlankField(true)
                .addField("Questions :","#1 - Que signifie le “I” de IUT ?\n#2 - Quel est votre niveau d’accréditation ?\n#3 - Quel est votre équipement ?\n#4 - Quels sont les SCP que vous connaissez ?\n#5 - Que pouvez-vous faire pour la fondation ?\n#6 - Un CUT est-il votre supérieur ?\n#7 (Bonus) : Qui est SCP-682 ?")
                .setFooter(Client.user.username)
                .setTimestamp()
   if(message.member.roles.find("name", "En Recrutement")){
        message.channel.send(iut_embed)
        message.delete()}
   else message.channel.send('Ton recrutement n\'est pas encore activé ' + message.author +'!')
        .catch((err) => {
        console.error(err)})
 }
})
//Commande ?test-iut

Client.on('message', message => {
 if (message.content === prefix + 'test-utl') {
 var utl_embed = new Discord.RichEmbed()
                .setColor('#C11C17')
                .setTitle(`Test UTL`)
                .setThumbnail(`${Client.user.avatarURL}`)
                .addBlankField(true)
                .addField("Questions :","#1 - Que signifie le “L” de UTL ?\n#2 - Quel est votre niveau d’accréditation ?\n#3 - Quel est votre équipement ?\n#4 - Un CUT est-il votre supérieur ?\n#5 - Quels SCP connaissez-vous ?#6 - Qui est SCP-106 ?\n#7 (Bonus) : Dans quel zone est confiné SCP-096 ? (LCZ; HCZ ou EZ ?)")
                .setFooter(Client.user.username)
                .setTimestamp()
   if(message.member.roles.find("name", "En Recrutement")){
        message.channel.send(utl_embed)
        message.delete()}
   else message.channel.send('Ton recrutement n\'est pas encore activé ' + message.author +'!')
        .catch((err) => {
        console.error(err)})
 }
})
//Commande ?test-utl

Client.on('message', message => {
 if (message.content === prefix + 'test-utd') {
 var utd_embed = new Discord.RichEmbed()
                .setColor('#C11C17')
                .setTitle(`Test UTD`)
                .setThumbnail(`${Client.user.avatarURL}`)
                .addBlankField(true)
                .addField("Questions :","#1 - Que signifie UTD ?\n#2 - Quel est rôle dans la fondation ?\n#3 - Quel est votre niveau d’accréditation ?\n#4 - Quels SCP connaissez-vous ?\n#5 - Quel est votre équipement ?\n#6 - Qui est SCP-008 ?\n#7 (Bonus) : Un CUT est-il votre supérieur ?")
                .setFooter(Client.user.username)
                .setTimestamp()
   if(message.member.roles.find("name", "En Recrutement")){
        message.channel.send(utd_embed)
        message.delete()}
   else message.channel.send('Ton recrutement n\'est pas encore activé ' + message.author +'!')
        .catch((err) => {
        console.error(err)})
 }
})
//Commande ?test-utd

Client.on('message', message => {
 if (message.content === prefix + 'test-aut') {
 var aut_embed = new Discord.RichEmbed()
                .setColor('#C11C17')
                .setTitle(`Test AUT`)
                .setThumbnail(`${Client.user.avatarURL}`)
                .addBlankField(true)
                .addField("Questions :","#1 - Quel est votre niveau d’accréditation ?\n#2 - Que signifie AUT ?\n#3 - Quel est votre équipement ?\n#4 - Quel est votre rôle dans la fondation ?\n#5 - Quels sont les SCP que vous connaissez ?\n#6 - Qui est SCP-096 ?\n#7 (Bonus) : Qui est l’O5-1 ?")
                .setFooter(Client.user.username)
                .setTimestamp()
   if(message.member.roles.find("name", "En Recrutement")){
        message.channel.send(aut_embed)
        message.delete()}
   else message.channel.send('Ton recrutement n\'est pas encore activé ' + message.author +'!')
        .catch((err) => {
        console.error(err)})
 }
})
//Commande ?test-aut

Client.on('message', message => {
  if (message.content === prefix + 'test-utm') {
  var utm_embed = new Discord.RichEmbed()
                 .setColor('#C11C17')
                 .setTitle(`Test UTM`)
                 .setThumbnail(`${Client.user.avatarURL}`)
                 .addBlankField(true)
                 .addField("Questions :","#1 - Que signifie UTM ?\n#2 - Quel est votre équipement ?\n#3 - Quels SCP connaissez-vous ?\n#4 - Quel est votre niveau d’accès ?\n#5 - Qui est SCP-106 ?\n#6 - Quel est votre rôle dans une équipe ?\n#7 (Bonus) : Un AUT est-il votre supérieur ?")
                 .setFooter(Client.user.username)
                 .setTimestamp()
    if(message.member.roles.find("name", "En Recrutement")){
         message.channel.send(utm_embed)
         message.delete()}
    else message.channel.send('Ton recrutement n\'est pas encore activé ' + message.author +'!')
         .catch((err) => {
         console.error(err)})
 }
})
//Commande ?test-utm

Client.on('message', message => {
 if (message.content === prefix + 'test-ut') {
 var ut_embed = new Discord.RichEmbed()
                .setColor('#C11C17')
                .setTitle(`Test UT`)
                .setThumbnail(`${Client.user.avatarURL}`)
                .addBlankField(true)
                .addField("Questions :","#1 - Que signifie UT ?\n#2 - Quel est votre équipement ?\n#3 - Quel est votre niveau d’accréditation ?\n#4 - Quel est votre rôle dans la fondation ?\n#5 - Quels SCP connaissez-vous ?\n#6 - Un AUT est-il votre supérieur ?\n#7 (Bonus) : Qui est SCP-173 ?")
                .setFooter(Client.user.username)
                .setTimestamp()
   if(message.member.roles.find("name", "En Recrutement")){
        message.channel.send(ut_embed)
        message.delete()}
   else message.channel.send('Ton recrutement n\'est pas encore activé ' + message.author +'!')
        .catch((err) => {
        console.error(err)})
 }
})
//Commande ?test-ut

Client.on('message', message => {
 if (message.content === prefix + 'test-garde') {
 var garde_embed = new Discord.RichEmbed()
                .setColor('#C11C17')
                .setTitle(`Test Garde`)
                .setThumbnail(`${Client.user.avatarURL}`)
                .addBlankField(true)
                .addField("Questions :","#1 - Quel est votre rôle dans la fondation ?\n#2 - Quel est votre niveau d’accréditation ?\n#3 - Où n’avez-vous pas le droit d’aller ?\n#4 - Quels sont les SCP que vous connaissez ?\n#5 - Un UT est-il votre supérieur ?")
                .setFooter(Client.user.username)
                .setTimestamp()
   if(message.member.roles.find("name", "En Recrutement")){
        message.channel.send(garde_embed)
        message.delete()}
   else message.channel.send('Ton recrutement n\'est pas encore activé ' + message.author +'!')
        .catch((err) => {
        console.error(err)})
 }
})
//Commande ?test-garde

Client.on('message', message => {
 if (message.content === prefix + 'test-superviseur') {
 var superviseur_embed = new Discord.RichEmbed()
                .setColor('#C11C17')
                .setTitle(`Test Superviseur`)
                .setThumbnail(`${Client.user.avatarURL}`)
                .addBlankField(true)
                .addField("Questions :","#1 - Quels SCP connaissez-vous ?\n#2 - Sur quels SCP peut-tu lancer des expériences ?\n#3 - Quel est votre niveau d’accréditation ?\n#4 - Un UT est-il votre supérieur ?\n#5 - Et un CUT ?\n#6 - Qui est SCP-106 ?\n#7 (Bonus) : Et SCP-2521 ?")
                .setFooter(Client.user.username)
                .setTimestamp()
   if(message.member.roles.find("name", "En Recrutement")){
        message.channel.send(superviseur_embed)
        message.delete()}
   else message.channel.send('Ton recrutement n\'est pas encore activé ' + message.author +'!')
        .catch((err) => {
        console.error(err)})
 }
})
//Commande ?test-superviseur

Client.on('message', message => {
 if (message.content === prefix + 'test-cc') {
 var cc_embed = new Discord.RichEmbed()
                .setColor('#C11C17')
                .setTitle(`Test Chercheur Confirmé`)
                .setThumbnail(`${Client.user.avatarURL}`)
                .addBlankField(true)
                .addField("Questions :","#1 - Quels SCP connaissez-vous ?\n#2 - Sur quels SCP peut-tu lancer des expériences ?\n#3 - Quel est votre niveau d’accréditation ?\n#4 - Un Superviseur est-il votre supérieur ?\n#5 - Et un CUT ?\n#6 - Qui est SCP-096 ?\n#7 (Bonus) : Et SCP-173 ?")
                .setFooter(Client.user.username)
                .setTimestamp()
   if(message.member.roles.find("name", "En Recrutement")){
        message.channel.send(cc_embed)
        message.delete()}
   else message.channel.send('Ton recrutement n\'est pas encore activé ' + message.author +'!')
        .catch((err) => {
        console.error(err)})
 }
})
//Commande ?test-cc

Client.on('message', message => {
 if (message.content === prefix + 'test-chercheur') {
 var chercheur_embed = new Discord.RichEmbed()
                .setColor('#C11C17')
                .setTitle(`Test Chercheur`)
                .setThumbnail(`${Client.user.avatarURL}`)
                .addBlankField(true)
                .addField("Questions :","#1 - Quels SCP connaissez-vous ?\n#2 - Pouvez-vous lancer des expériences ?\n#3 - Si oui sur quels SCP ?\n#4 - Quel est votre niveau d’accréditation ?\n#5 - Qui est SCP-939 ?\n#6 - Et SCP-682 ?\n#7 (Bonus) : Qui est l’O5-1 ?")
                .setFooter(Client.user.username)
                .setTimestamp()
   if(message.member.roles.find("name", "En Recrutement")){
        message.channel.send(chercheur_embed)
        message.delete()}
   else message.channel.send('Ton recrutement n\'est pas encore activé ' + message.author +'!')
        .catch((err) => {
        console.error(err)})
 }
})
//Commande ?test-chercheur

Client.on('message', message => {
 if (message.content === prefix + 'test-ac') {
 var ac_embed = new Discord.RichEmbed()
                .setColor('#C11C17')
                .setTitle(`Test Assistant Chercheur`)
                .setThumbnail(`${Client.user.avatarURL}`)
                .addBlankField(true)
                .addField("Questions :","#1 - Quels SCP connaissez-vous ?\n#2 - Pouvez-vous lancer des expériences ?\n#3 - Quel est votre niveau d’accréditation ?\n#4 - Un Superviseur est-il votre supérieur ?\n#5 - Et un UT ?")
                .setFooter(Client.user.username)
                .setTimestamp()
   if(message.member.roles.find("name", "En Recrutement")){
        message.channel.send(ac_embed)
        message.delete()}
   else message.channel.send('Ton recrutement n\'est pas encore activé ' + message.author +'!')
        .catch((err) => {
        console.error(err)})
 }
})
//Commande ?test-ac

Client.on('message', message => {
  if (message.content === prefix + 'test-medecin') {
  var medecin_embed = new Discord.RichEmbed()
                 .setColor('#C11C17')
                 .setTitle(`Test Médecin`)
                 .setThumbnail(`${Client.user.avatarURL}`)
                 .addBlankField(true)
                 .addField("Questions :","#1 - Quels SCP connaissez-vous ?\n#2 - Quel est votre équipement ?\n#3 - Et votre niveau d’accès ?\n#4 - Quel est votre rôle dans la fondation ?")
                 .setFooter(Client.user.username)
                 .setTimestamp()
    if(message.member.roles.find("name", "En Recrutement")){
         message.channel.send(medecin_embed)
         message.delete()}
    else message.channel.send('Ton recrutement n\'est pas encore activé ' + message.author +'!')
         .catch((err) => {
         console.error(err)})
 }
})
//Commande ?test-medecin

Client.on('message', message => {
  if (message.content === prefix + 'test-rpx') {
  var rpx_embed = new Discord.RichEmbed()
                 .setColor('#C11C17')
                 .setTitle(`Test RP X`)
                 .setDescription(`Ce test portera sur des questions réelles qui n'ont rien à voir avec l'univers SCP.`)
                 .setThumbnail(`${Client.user.avatarURL}`)
                 .addBlankField(true)
                 .addField("Questions :","#1 - Quel est votre âge ?\n#2 - À quoi définissez-vous le RP X ?\n#3 - Quelle est la majorité Sexuelle en France ?\n#4 - Le Lolicon est-il autorisé en France ?\n#5 - Quel est la majorité Civile en France ?")
                 .setFooter(Client.user.username)
                 .setTimestamp()
    if(message.member.roles.find("name", "En Recrutement")){
         message.channel.send(rpx_embed)
         message.delete()}
    else message.channel.send('Ton recrutement n\'est pas encore activé ' + message.author +'!')
         .catch((err) => {
         console.error(err)})
 }
})
//Commande ?test-rpx

//#endregion

//#region------------------LOGS------------------\\

Client.on('message', message => {
  if (message.content === prefix + 'test-rpx') {
  var log_embed = new Discord.RichEmbed()
                 .setColor('#C11C17')
                 .setTitle(`Alerte Test RP X`)
                 .setThumbnail(`${message.author.avatarURL}`)
                 .setDescription("Test fait par " + message.author.username +".")
                 .setFooter(Client.user.username)
                 .setTimestamp()
  var logfail_embed = new Discord.RichEmbed()
                 .setColor('#C11C17')
                 .setTitle(`Alerte Test RP X`)
                 .setThumbnail(`${message.author.avatarURL}`)
                 .setDescription("Test refusé, fait par " + message.author.username +".")
                 .setFooter(Client.user.username)
                 .setTimestamp()
    if (message.member.roles.find("name", "En Recrutement")){; Client.channels.get('442729462828892190').send(log_embed)}
    else Client.channels.get('442729462828892190').send(logfail_embed)
 }
})
//Log RP X

Client.on('message', message => {
  if (message.content === prefix + 'recrutez-moi') {
  var log_embed = new Discord.RichEmbed()
                 .setColor('#C11C17')
                 .setTitle(`Recrutement activé`)
                 .setThumbnail(`${message.author.avatarURL}`)
                 .setDescription("Recrutement de " + message.author.username +" activé.")
                 .setFooter(Client.user.username)
                 .setTimestamp()
  var logfail_embed = new Discord.RichEmbed()
                 .setColor('#C11C17')
                 .setTitle(`Recrutement déjà actif`)
                 .setThumbnail(`${message.author.avatarURL}`)
                 .setDescription("Recrutement déjà actif pour " + message.author.username +".")
                 .setFooter(Client.user.username)
                 .setTimestamp()
    if (message.member.roles.find("name", "En Recrutement")){; Client.channels.get('442729462828892190').send(logfail_embed)}
    else Client.channels.get('442729462828892190').send(log_embed)
 }
})
//Log ?recrutez-moi

//#endregion

//#region------------------COMMANDES SPÉCIALES------------------\\

Client.on('message', message => {
   const args = message.content.slice(prefix.length).trim().split(/ +/g)
   const command = args.shift().toLowerCase()
   let name = args.slice(1).join(" ")
   if (command === 'setusername') {
     if (message.member.roles.find("name", "Owner")){; Client.user.setUsername(name); message.channel.send("Hey ! Mon pseudo à changé !")}
     else message.channel.send('Hé là ! Tu n\'est pas mon créateur ! Pour qui te prend tu !')
       .then(user => console.log(`My new username is ${user.username}`))
       .catch((err) => {
       console.error(err)})
 }
})
//Commande ?setusername

//#endregion

//#region------------------Client LOGIN-----------------\\

Client.login(config.token)
//#endregion
