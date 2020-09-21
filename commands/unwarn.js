const { Database } = require("quickmongo");
const db = new Database("mongodb://ukeuc9uvjxfjhkonvmis:yYzBZ43o9CmtRDuemg9h@bgfweiijeayygum-mongodb.services.clever-cloud.com:27017/bgfweiijeayygum");
 const Discord = require("discord.js")
exports.run = async (client, message, args, config) => {
   let sex = message.content.split(" ").slice(2).join(" ")
       if (!message.member.hasPermission("MANAGE_GUILD")) {return message.channel.send(new Discord.MessageEmbed().setDescription("You dont have permission manage server"))}
  let user = message.mentions.users.first();
  if(!user) return message.channel.send(new Discord.MessageEmbed().setDescription(`Make sure mention next time.`).setColor("#00BFFF"))
//  let member = db.fetch(`warn_${message.guild.id}_${user.id}`) 
  if (sex == 'all') {
    let money = await db.fetch(`warn_${message.guild.id}_${user.id}`)
   await db.subtract(`warn_${message.guild.id}_${user.id}`, money)
    message.channel.send(new Discord.MessageEmbed().setDescription(`Removed \`${money}\` warns from the ${user}`).setColor("#00BFFF"))
    } else {
    if(!sex) return message.channel.send(new Discord.MessageEmbed().setDescription("You must type number or all for removes the warns").setColor("#00BFFF"))
   await db.subtract(`warn_${message.guild.id}_${user.id}`, sex)
    message.channel.send(new Discord.MessageEmbed().setTitle("Unwarns").setThumbnail(user.avatarURL({dynamic:true})).setDescription(`Removed \`${sex}\` warns from the ${user}`).setColor("#00BFFF"))
    }
    }

