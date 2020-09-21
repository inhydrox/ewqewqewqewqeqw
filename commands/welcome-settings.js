exports.run = async (client, message, args) => {
 const Discord = require("discord.js")
 const { Database } = require("quickmongo")
 const db = new Database("mongodb://ukeuc9uvjxfjhkonvmis:yYzBZ43o9CmtRDuemg9h@bgfweiijeayygum-mongodb.services.clever-cloud.com:27017/bgfweiijeayygum");
let chx = await db.get(`welcome_${message.guild.id}`); 
  let words = await db.get(`message_${message.guild.id}`)
if(chx === null) chx = "None"
if(words === null) words = `Welcome [user] To [server] We Are [count]`;
let embed = new Discord.MessageEmbed()
.setTitle(`${message.guild.name} Welcome Settings`)
.setThumbnail(message.guild.iconURL({dynamic:true}))
.setColor("#00BFFF")
.addField("Welcome Message:", `\`\`\`${words}\`\`\``,true)
.addField("Welcome Channel:", `\`\`\`<#${chx}>\`\`\``,true)
.setFooter(message.guild.name , message.guild.iconURL({dynamic:true}))
return message.channel.send(embed)
}
