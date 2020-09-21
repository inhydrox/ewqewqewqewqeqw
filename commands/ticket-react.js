const Discord = require("discord.js");
const fs = require("fs");

exports.run = async (bot, message, args, functions) => {

if(message && message.deletable) message.delete().catch(e => {});
if(!args[0]) args[0] = "Ticket"
let embed = new Discord.MessageEmbed()
.setTitle(args[0])
.setDescription(`React with :envelope: to create a ticket.`)
   .setTimestamp()
.setFooter(bot.user.username, bot.user.avatarURL())
message.channel.send(embed).then(m => {
  m.react('✉️');
});

}
