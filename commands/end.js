exports.run = async (client, message, args) => {
    const ms = require("ms");
    const db = require("quick.db")
    const config = require("../config.js")
    let language = db.fetch(`language_${message.guild.id}`)
    if(language === null) language = config.basiclang
    const lang = require(`../language/${language}.js`)
    let role = db.fetch(`role_${message.guild.id}`)
    const Discord = require("discord.js")
    if(role === null) role = config.grole

    // If the member doesn't have enough permissions
    if(!message.member.hasPermission("MANAGE_MESSAGES") && !message.member.roles.cache.some((r) => r.name === role)){
        return message.channel.send(lang.start.perms);
    }

    // If no message ID or giveaway name is specified
    if(!args[0]){
        return message.channel.send(new Discord.MessageEmbed().setDescription(lang.end.msg));
    }

    // try to found the giveaway with prize then with ID
    let giveaway = client.giveawaysManager.giveaways.find((g) => g.prize === args.join(' ')) || client.giveawaysManager.giveaways.find((g) => g.messageID === args[0]);

    // If no giveaway was found
    if(!giveaway){
        return message.channel.send(new Discord.Messagembed().setDescription(lang.end.err + "** **" + "`" + args.join(' ') + "`" + "."));
    }

    // Edit the giveaway
    client.giveawaysManager.edit(giveaway.messageID, {
        setEndTimestamp: Date.now()
    })
    // Success message
    .then(() => {
        // Success message
        message.channel.send(new Discord.MessageEmbed().setDescription(lang.end.good + "** **" + "`" + (client.giveawaysManager.options.updateCountdownEvery/1000) + "`" + "** **" + lang.units.seconds + "."));
    })
    .catch((e) => {
        if(e.startsWith(`Giveaway with message ID ${giveaway.messageID} is not ended.`)){
            message.channel.send(new Discord.MessageEmbed().setDescription(lang.end.err + "** **" + "`" + giveaway.messageID + "`" + "."));
        } else {
            console.error(e);
            message.channel.send(new Discord.MessageEmbed().setDescription(lang.end.errmod));
        }
    });
};