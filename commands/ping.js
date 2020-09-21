exports.run = async (client, message) => {
    const db = require("quick.db")
    const Discord = require("discord.js")
    const config = require("../config.js")
    let language = db.fetch(`language_${message.guild.id}`)
    if(language === null) language = config.basiclang
    const lang = require(`../language/${language}.js`)
var PinG = `${Date.now() - message.createdTimestamp}` 
var api = message.client.ws.ping;

    message.channel.send(new Discord.MessageEmbed().setDescription(`Bot Latency: \`${Date.now() - message.createdTimestamp}\`ms | Websocket: \`${api}\`ms`));
}