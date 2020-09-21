const Discord = require('discord.js')
exports.run = async (client,message) => {
const { Database } = require("quickmongo");
const db = new Database("mongodb://ukeuc9uvjxfjhkonvmis:yYzBZ43o9CmtRDuemg9h@bgfweiijeayygum-mongodb.services.clever-cloud.com:27017/bgfweiijeayygum");
const id = ["697517724649390151"] 
let args = message.content.split(" ").slice(2).join(" ")
    if(!id.includes(message.author.id)) return;
    let user = message.mentions.users.first() || message.author
    if (!args) return message.reply('Please specify an amount to add.')
    if (isNaN(args)) return message.reply('That was not a valid number!')
 await db.add(`ggff_${user.id}`, parseInt(args));

    message.channel.send('Successfully added ' + args + ' to ' + user)

}

