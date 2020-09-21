const ms = require('parse-ms')
const Discord = require('discord.js')
exports.run = async (client, message, args, config) => {
 const { Database } = require("quickmongo")
 const db = new Database("mongodb://ukeuc9uvjxfjhkonvmis:yYzBZ43o9CmtRDuemg9h@bgfweiijeayygum-mongodb.services.clever-cloud.com:27017/bgfweiijeayygum");
var prefix = await db.fetch(`newprefix_${message.guild.id}`)
  if(prefix === null) prefix = "."

           if (!message.member.hasPermission("MANAGE_GUILD")) {return message.channel.send(new Discord.MessageEmbed().setDescription("You dont have permission manage server"))}
    let user = message.mentions.users.first() || message.guild.members.cache.get(args[1]);
    let reason = message.content.split(" ").slice(2).join(" ")
    if(!reason) reason = "`No Reason`"
    if(!user) return message.channel.send(new Discord.MessageEmbed().setDescription("Missing argument, the `user` argument is required!").setColor("#00BFFF").setTitle("Warn Command").addField("Usage",`\`${prefix}warn @Simple. Reason\` - Gives The mentioned user warn`).addField("Example Usage",`\`${prefix}warn @Simple. Reason\` - Gives the mentioned user warn with reason\n\`${prefix}warn @Simple.\` - Gives The mentioned user warn without reason`))
    if(user.id === message.guild.ownerID) return;
    if(message.author.id === user.id ) return message.channel.send(new Discord.MessageEmbed().setDescription("You cant give yourself warn").setColor("#00BFFF"))
    let warns = await db.fetch(`warn_${message.guild.id}_${user.id}`)
    if(warns === null) warns = "0";
    let embed = new Discord.MessageEmbed()
.setTitle("Warned User").setColor("#00EFFF")//.setThumbnail(message.author.avatarURL({dynamic:true}))
    .setDescription(`User: ${user} \`(${user.id})\`\nWarned By: ${message.author} \`(${user.id})\`\nReason: ${reason}\nNumbers Warns This User: \`${warns}\``)
    message.channel.send(embed)
    user.send(new Discord.MessageEmbed().setTitle(`Warned`).setColor("#00BFFF").addField(`ServerName`,`${message.guild.name}`).addField("By:", `${message.author}`).addField("His ID",`${message.author.id}`).addField("Reason",`${reason}`))
  await db.add(`warn_${message.guild.id}_${user.id}`, 1)
}

