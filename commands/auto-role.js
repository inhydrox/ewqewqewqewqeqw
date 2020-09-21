const { Database } = require("quickmongo");
const db = new Database("mongodb://ukeuc9uvjxfjhkonvmis:yYzBZ43o9CmtRDuemg9h@bgfweiijeayygum-mongodb.services.clever-cloud.com:27017/bgfweiijeayygum");
exports.run = async (client, message, args) => {

 const Discord = require("discord.js")
 if (!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return  message.channel.send(new Discord.MessageEmbed().setDescription("You dont have permission adminstrator").setColor("#00BFFF"))
       if (!message.guild.member(message.client.user).hasPermission("ADMINISTRATOR")) return;
const role = message.guild.roles.cache.find(role => role.name.startsWith(message.content.split(" ").slice(1).join(" ")));
 if(!role) return message.channel.send(new Discord.MessageEmbed().setDescription("I Cant Find This Role!").setColor("#00BFFF").setTitle("Error!"));
if(!args[0]) return message.channel.send(new Discord.MessageEmbed().setColor("#00BFFF").setDescription("Please type the role name to set it")) 
await db.set(`roletest_${message.guild.id}`, role);
    message.channel.send(new Discord.MessageEmbed().setFooter(`Requested By: ${message.author.tag}`, message.author.avatarURL({dynamic: true})).setColor(`#00BFFF`).setDescription(`Done the autorole has been changed to __${role}__`)) 

  }
