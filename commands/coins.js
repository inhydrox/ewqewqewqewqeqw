const { Database } = require("quickmongo");
const db = new Database("mongodb://ukeuc9uvjxfjhkonvmis:yYzBZ43o9CmtRDuemg9h@bgfweiijeayygum-mongodb.services.clever-cloud.com:27017/bgfweiijeayygum"); 
const Discord = require("discord.js")
exports.run = async (bot, message, args) => {
  let user = message.mentions.users.first() || message.guild.members.cache.get(args[1]) || message.author;
    let bal = await db.fetch(`ggff_${user.id}`)
    if (bal === null) bal = 0;
let emb = new Discord.MessageEmbed()
.setColor("#00EFFF").setThumbnail(user.avatarURL({dynamic:true}))
.setAuthor(user.username, user.avatarURL()).setDescription(`${user.username} have a \`${bal}\` coins`).setFooter(`Requested By: ${message.author.tag}`, message.author.avatarURL({dynamic:true}))
.setTimestamp()
message.channel.send(emb)


}
