exports.run = async (client, message) => {
    const db = require("quick.db")
    var prefix = db.fetch(`newprefix_${message.guild.id}`)
  if(prefix === null) prefix = ".g"
  const Discord = require("discord.js")
    const config = require("../config.js")
    let language = db.fetch(`language_${message.guild.id}`)
    if(language === null) language = config.basiclang
    const lang = require(`../language/${language}.js`)
    let version = require("../package.json").version;
    let discord_giveaways = require("../package.json").dependencies["discord-giveaways"];
    let embed = new Discord.MessageEmbed()
        .setAuthor(`RustyBot's | Version 1.0.1`)
        .setThumbnail(client.user.avatarURL())
                      //https://www.google.com/url?sa=i&url=http%3A%2F%2Fwww.bestworldevents.com%2Fhello-gif-for-whatsapp-sweet-messages-for-husband%2F&psig=AOvVaw0oOo0wYi7OKbSnxRdeEQxZ&ust=1599964209529000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNCO2KnJ4usCFQAAAAAdAAAAABAI')
        .setDescription(lang.help.disc)
        .addField(":tada: RustyBot Commands:", `\`${prefix}help\` | shows commands and info of bot list.\n\`${prefix}ping\` | shows bot latency.\n\`${prefix}invite\` | shows main links (invite and support) of bot. `)
        .addField("Giveaway Commands:", `\`${prefix}start\` | to create giveaway.\n\`${prefix}end\` | to end giveaway start.\n\`${prefix}edit\` | to edit giveaway.\n\`${prefix}reroll\` | to choose a new winner.\n\`${prefix}set-role\` | to choose role makes giveaways.`)
       // .addField(lang.help.stats, lang.help.stat + message.client.guilds.cache.size + `\n` + lang.help.set + message.client.users.cache.size + `\n` +lang.help.chn+ message.client.channels.cache.size)
       // .addField(lang.help.moreinfo, lang.help.comd + message.client.commands.size + `\n` + lang.help.giv + client.giveawaysManager.giveaways.length+ `\n` +lang.help.ver + `Version 1.0.1\n\`Discord.js\`: Version${Discord.version}\n\`Node.js:\` Version${process.versions.node}`) 
  .setColor("#00BFFF")
    .setFooter(`Requested By: ${message.author.tag}`, message.author.avatarURL({dynamic:true}))
    message.channel.send(new Discord.MessageEmbed().setDescription(`:tada: RustyBot commands:

${prefix}about - shows info about the bot
${prefix}invite - shows how to invite the bot
${prefix}ping - checks the bot's latency

__Giveaway:__
${prefix}prefix <New Prefix> - set new prefix for your server
${prefix}set-role <Role Mention> - set role for makes giveaways
${prefix}start <time> [winners] [prize] - starts a giveaway 
${prefix}end [message id] - ends (picks a winner for) the specified or latest giveaway in the current channel
${prefix}reroll [message id] - re-rolls the specified or latest giveaway in the current channel

Do not include <> nor [] - <> means required and [] means optional.
For additional help, join the support server
`).setColor("#00BFFF").setThumbnail(client.user.avatarURL()).setAuthor(`RustyBot | Version 1.0.1`, client.user.avatarURL()).setFooter(`Requested By: ${message.author.tag}`, message.author.avatarURL({dynamic:true})))
}