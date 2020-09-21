const ms = require('parse-ms')
const Discord = require('discord.js')
const { Database } = require("quickmongo");
const db = new Database("mongodb://ukeuc9uvjxfjhkonvmis:yYzBZ43o9CmtRDuemg9h@bgfweiijeayygum-mongodb.services.clever-cloud.com:27017/bgfweiijeayygum"); 
exports.run = async (client, message, args, config) => {
    let timeout = 86400000 // 24 hours in milliseconds, change if you'd like.
  let amount = Math.floor(Math.random() * 4000) + 1;
    let daily = await db.fetch(`claim_${message.author.id}`);
    if (daily !== null && timeout - (Date.now() - daily) > 0) {
        let time = ms(timeout - (Date.now() - daily));
        message.channel.send(new Discord.MessageEmbed().setTitle("Error").setDescription(`An error occurred when attempting to perform that request. Please check the Syntax and try again.
Error: \`You can claim again after __${time.hours}h ${time.minutes}m ${time.seconds}s__\`.`).setColor("#00BFFF").setThumbnail(message.author.avatarURL()))
    } else {
    let embed = new Discord.MessageEmbed()
.setTitle("Success")    
    .setColor("#00EFFF")
    .setThumbnail(message.author.avatarURL({dynamic:true}))
    .setDescription(`You have claimed your daily reward of \`${amount}\` coins!`)
   .setTimestamp()
    message.channel.send(embed)
await db.add(`ggff_${message.author.id}`, parseInt(amount));
 // await  db.add(`coins_${message.author.id}`, amount)
await  db.set(`claim_${message.author.id}`, Date.now())
    }
}