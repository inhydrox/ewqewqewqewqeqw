exports.run = async (client, message, args) => {
  const Discord = require("discord.js");
const db = require("quick.db")
  let embed2 = new Discord.MessageEmbed()
.setColor("#00BFFF")
.setTitle("Error!")
    .setDescription("You Must Have Premission Manage Message")
    if (!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.channel.send(embed2);
           message.channel.updateOverwrite(message.guild.id, {  
             SEND_MESSAGES: true
           })
      .then(() => {
let embed33 = new Discord.MessageEmbed()
.setColor("#00BFFF")
.setDescription("channel got `unlock`")

        message.channel.send(embed33)
      });

  }