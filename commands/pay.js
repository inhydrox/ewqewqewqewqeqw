const Discord = require('discord.js')
const { Database } = require("quickmongo");
const db = new Database("mongodb://ukeuc9uvjxfjhkonvmis:yYzBZ43o9CmtRDuemg9h@bgfweiijeayygum-mongodb.services.clever-cloud.com:27017/bgfweiijeayygum");
exports.run = async (client, message, args, config) => {
let user = message.mentions.users.first() || message.guild.members.cache.get(args[0]);
if (!user) return message.channel.send(new Discord.MessageEmbed()
  .setColor("#00BFFF")
  .setDescription('Make Mention Next Time.'));  
let member = await db.fetch(`ggff_${message.author.id}`);
if (!args[1])return message.channel.send(new Discord.MessageEmbed().setThumbnail(message.author.avatarURL()).setColor("YELLOW").setDescription('Please type an amount.'))  
if (message.content.includes('-'))return message.channel.send(new Discord.MessageEmbed()
  .setThumbnail(message.author.avatarURL({dynamic:true}))
  .setDescription('Negative money can not be paid.')
  .setColor("#00BFFF"));

if (message.content.includes('.'))return message.channel.send(new Discord.MessageEmbed()
  .setThumbnail(message.author.avatarURL({dynamic:true}))
  .setDescription('Money can not be paid.')
  .setColor("#00BFFF"));
if(message.author.id == user.id) return message.channel.send(new Discord.MessageEmbed()
  .setDescription("You Cant Pay To YourSelf ")
  .setColor("#00BFFF"));
if (member < parseInt(args[1]))return message.channel.send(new Discord.MessageEmbed()
  .setColor("YELLOW")
  .setDescription(`You don't have Enough credits to give to ${user.username}`));
 if(parseInt(args[1]) < 1) return message.channel.send(new Discord.MessageEmbed()
  .setColor("#00BFFF")
  .setDescription(`You Must transfer Coins above \`1\`.`));
if(isNaN(parseInt(args[1]))) return message.channel.send(new Discord.MessageEmbed()
  .setTitle("Error")
  .setThumbnail(message.author.avatarURL({dynamic:true}))
  .setDescription('Only Number')
  .setColor("#00BFFF"));
  message.channel.send(new Discord.MessageEmbed().setDescription(`${message.author} Transfered \`${args[1]}\` To ${user}`))
user.send(new Discord.MessageEmbed()
  .setColor("#00BFFF")
  .addField("From:",`${message.author}`,true)
  .addField("His ID",`\`${message.author.id}\``,true)
  .addField("To",`${user}`)
  .addField("Amount",`${args[1]}`,true)
  .addField("Server Name",`${message.guild.name}`,true))
  .catch(() => {});

await db.add(`ggff_${user.id}`, parseInt(args[1]));
await db.math(`ggff_${message.author.id}`, "subtract", parseInt(args[1]));
}
