const fs = require("fs");
 const { MessageEmbed } = require("discord.js");
 const { Database } = require("quickmongo")
 const db = new Database("mongodb://ukeuc9uvjxfjhkonvmis:yYzBZ43o9CmtRDuemg9h@bgfweiijeayygum-mongodb.services.clever-cloud.com:27017/bgfweiijeayygum");
 
exports.run = async (bot, message, args) => {
let args1 = message.content.split(" ").slice(2).join(" ");
 if(!args1) args1 =  "No Reason"
  let embed = new MessageEmbed()
  .setColor("#00BFFF")
  .setDescription(`You Must Have Permission Ban Members`)
if (!message.guild.member(message.author).hasPermission("BAN_MEMBERS"))
return message.channel.send(embed);
  let embed2 = new MessageEmbed()
  .setDescription(`I Must Have Premission Ban Members `)
if (!message.guild.member(message.client.user).hasPermission("BAN_MEMBERS"))
return message.channel.send(embed2);
                   const user = message.guild.member( message.mentions.users.first()) || message.guild.members.cache.get(args[0])
var prefix = await db.fetch(`newprefix_${message.guild.id}`)
  if(prefix === null) prefix = "."
  var embed11 = new MessageEmbed()
                .setColor("#00BFFF")
  .setDescription("Missing argument, the `user` argument is required!").addField("Usage",`\`${prefix}ban @Simple.\` - Bans the mentioned user with the given reason`).setTitle("Ban Command").addField("Example Usage", `\`${prefix}ban @Simple.\` - Ban the user without reason\n\`${prefix}ban @Simple. Spamming\` - Bans the user with reason`).setFooter("Command category: Administrator");
if (!user) return message.channel.send(embed11);
      let embedii = new MessageEmbed()
  .setDescription(`You Cant Ban Yourself.`)
  if(message.author.id == user.id) return message.channel.send(embedii)
          if(message.guild.member(user).roles.highest.position >= message.guild.member(message.client.user).roles.highest.position) return message.channel.send(new MessageEmbed().setColor("#00BFFF").setTitle("Error!").setDescription(`I Cant Ban \`${user.username}\` Because His Role Highest Than My Role!`))
          if(message.guild.member(user).roles.highest.position >= message.guild.member(message.author).roles.highest.position) return message.channel.send(new MessageEmbed().setTitle("Error!").setColor("#00BFFF").setDescription(`You Cant Ban \`${user.username}\` Because His Role Highest Than Your Role!`));
  message.guild.member(user).ban();
      let embedban = new MessageEmbed()
  .setColor("#00BFFF")
  .setDescription("You Cant Ban This User <@" + user + ">");
  if (!message.guild.member(user).bannable)
return message.channel.send(embedban)

  let embed55 = new MessageEmbed()
  .setThumbnail(user.user.avatarURL({dynamic:true}))
              .setColor("#00BFFF")
  .setTitle("Banned User ")
    .setDescription(" User : <@" +user.id +"> \`\`("+ user.id +")`\`\ \nBanned By : <@" + message.author.id +"> \`\`("+ message.author.id +")`\`\ ")
        .setFooter(`Requested By ${message.author.tag}`, message.author.avatarURL())
              .setTimestamp(); 
  message.channel.send(embed55);
  
}

