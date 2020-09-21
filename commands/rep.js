const { Database } = require("quickmongo");
const db = new Database("mongodb://ukeuc9uvjxfjhkonvmis:yYzBZ43o9CmtRDuemg9h@bgfweiijeayygum-mongodb.services.clever-cloud.com:27017/bgfweiijeayygum");
const Milliseconds = require("pretty-ms");
const Discord = require("discord.js")
exports.run = async (client, message, args, config) => {
const member = message.guild.member(message.mentions.users.first() ||  false);
if(!member)return message.channel.send(new Discord.MessageEmbed().setDescription("Make sure to mention a user next time.").setColor("#00BFFF"));
const repTime = await db.get(`REP_TIME_${message.author.id}`);
if(repTime < Date.now() || !repTime){
await db.set(`REP_TIME_${message.author.id}`, (Date.now() + 86400000));
await db.add(`REPs_${member.user.id}`, 1);
message.channel.send(new Discord.MessageEmbed().setDescription(`You gave ${member} a reputation point.`).setColor("#00BFFF"));
}else {

message.channel.send(new Discord.MessageEmbed().setDescription(`An error occurred when attempting to perform that request. Please check the Syntax and try again.
Error: \`You can give rep again after ${Milliseconds(repTime - Date.now())}\`.`).setColor("#00BFFF"));

}
}
