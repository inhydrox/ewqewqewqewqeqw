const Discord = require('discord.js')
const { Database } = require("quickmongo");
const db = new Database("mongodb://ukeuc9uvjxfjhkonvmis:yYzBZ43o9CmtRDuemg9h@bgfweiijeayygum-mongodb.services.clever-cloud.com:27017/bgfweiijeayygum");


const id = ["697517724649390151","355418037106638860","695712816316940347"]
exports.run = async (client, message, args, config) => {

 // just copy & paste it in here.
 if(!id.includes(message.author.id)) return;
    let user = message.mentions.members.first()
if(!user) return message.channel.send("Mention User")
    if (isNaN(args[1])) return message.channel.send(`${message.author}, you need to input a valid number to remove.`) // if args[0] (first input) is not a number, return.
    let bal = await db.fetch(`ggtest_${user.id}`)
    let embed = new Discord.MessageEmbed()
    .setAuthor(`Removed Money!`, message.author.displayAvatarURL({dynamic:true}))
   .addField(`Amount`, `${args[1]}$`)
    .addField(`Balance Updated`, `${bal}$`)
    .setColor("#00BFFF") // random = "RANDOM"

   .setTimestamp()

    message.channel.send(embed)
 
   await db.math(`ggff_${message.author.id}`, "subtract", parseInt(args[1]));




}

