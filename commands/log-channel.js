const { Database } = require("quickmongo");
const db = new Database("mongodb://ukeuc9uvjxfjhkonvmis:yYzBZ43o9CmtRDuemg9h@bgfweiijeayygum-mongodb.services.clever-cloud.com:27017/bgfweiijeayygum");
 const Discord = require("discord.js")
exports.run = async (client, message, args) => {
 if (!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return  message.channel.send(new Discord.MessageEmbed().setDescription("You dont have permission adminstrator").setColor("#00BFFF"))
       if (!message.guild.member(message.client.user).hasPermission("ADMINISTRATOR")) return;
    let channel = message.mentions.channels.first() 
    if(!channel) { 
      return message.channel.send(new Discord.MessageEmbed().setColor(`#00BFFF`).setFooter(`Requested By: ${message.author.tag}`, message.author.avatarURL({dyanmic:true})).setDescription("Please Mention the channel first"))
    }
   await db.set(`logchannel_${message.guild.id}`, channel.id) 
    message.channel.send(new Discord.MessageEmbed().setFooter(`Requested By: ${message.author.tag}`, message.author.avatarURL({dynamic: true})).setColor(`#00BFFF`).setDescription(`log Channel is setup as ${channel}`)) 
  }
