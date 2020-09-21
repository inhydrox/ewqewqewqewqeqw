exports.run = async (client, message) => {
    const db = require("quick.db")
    var prefix = db.fetch(`newprefix_${message.guild.id}`)
  if(prefix === null) prefix = ".g"
  const Discord = require("discord.js")
    const config = require("../config.js")
    let language = db.fetch(`language_${message.guild.id}`)
    if(language === null) language = config.basiclang
    let inviteLink = "https://discord.com/api/oauth2/authorize?client_id=735878582878077069&permissions=32&scope=bot"
    const lang = require(`../language/${language}.js`)
    let version = require("../package.json").version;
    let discord_giveaways = require("../package.json").dependencies["discord-giveaways"];
    let embed = new Discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL())  
    .setThumbnail(client.user.avatarURL())
     .addField(lang.help.stats, lang.help.stat + message.client.guilds.cache.size + `\n` + lang.help.set + message.client.users.cache.size + `\n` +lang.help.chn+ message.client.channels.cache.size)
      .addField(lang.help.moreinfo, lang.help.comd + message.client.commands.size + `\n` + lang.help.giv + client.giveawaysManager.giveaways.length+ `\n` +lang.help.ver + `v1.0.1\n\`Discord.js\`: v${Discord.version}\n\`Node.js:\` v${process.versions.node}`) 
.addField("Invite Me", `[Invite Me](${inviteLink})`) 
  .setColor("#00BFFF")
    .setFooter(`Requested By: ${message.author.tag}`, message.author.avatarURL({dynamic:true}))
    message.channel.send(embed)}