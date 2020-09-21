const { Database } = require("quickmongo");
const db = new Database("mongodb://ukeuc9uvjxfjhkonvmis:yYzBZ43o9CmtRDuemg9h@bgfweiijeayygum-mongodb.services.clever-cloud.com:27017/bgfweiijeayygum");
exports.run = async (client, message, args, config) => {
 const Discord = require("discord.js")

  let user = message.mentions.users.first() || message.guild.members.cache.get(args[1]) || message.author;
 // if(!user) return;
 let warns = await db.get(`warn_${message.guild.id}_${user.id}`)
 if(warns === null) warns = 0;
 let embed = new Discord.MessageEmbed()
 .setTitle("Warns").setThumbnail(user.avatarURL({dynamic:true}))
 .setFooter(`Requested By: ${message.author.tag}`, message.author.avatarURL())
 .setDescription(`${user} have \`${warns}\` warnings`)
 message.channel.send(embed)
 }

