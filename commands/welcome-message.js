const { Database } = require("quickmongo");

const db = new Database("mongodb://ukeuc9uvjxfjhkonvmis:yYzBZ43o9CmtRDuemg9h@bgfweiijeayygum-mongodb.services.clever-cloud.com:27017/bgfweiijeayygum");

 const Discord = require("discord.js")
exports.run = async (client, message, args) => {

 if (!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return  message.channel.send(new Discord.MessageEmbed().setDescription("You dont have permission adminstrator").setColor("#00BFFF"))
       if (!message.guild.member(message.client.user).hasPermission("ADMINISTRATOR")) return;

   let messagewlc = message.content.split(" ").slice(1).join(" ")

   if(!messagewlc) return message.channel.send(new Discord.MessageEmbed().setDescription(`Please Type Next Time Your Welcome Message`).setColor(`#00BFFF`).setFooter(`Requested By: ${message.author.tag}`, message.author.avatarURL({dynamic:true})))

 await db.set(`message_${message.guild.id}`, messagewlc)

    message.channel.send(new Discord.MessageEmbed().setFooter(`Requested By: ${message.author.tag}`, message.author.avatarURL({dynamic: true})).setColor(`#00BFFF`).setDescription(`Welcome message is setup`)) 

  }

