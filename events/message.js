const Discord = require("discord.js")
const config = require('../config');
 const { Database } = require("quickmongo")
 const db = new Database("mongodb://ukeuc9uvjxfjhkonvmis:yYzBZ43o9CmtRDuemg9h@bgfweiijeayygum-mongodb.services.clever-cloud.com:27017/bgfweiijeayygum");
module.exports = async (client, message) => {
var prefix = await db.fetch(`newprefix_${message.guild.id}`)
if(prefix === null) prefix = "."
if (!message.content.startsWith(prefix) || !message.guild) return;
const args = message.content.slice(prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();

  //Grab the command data from the client.commands Enmap
  const cmd = client.commands.get(command);

  //If that command doesn't exist, silently exit and do nothing
  if (!cmd) return;
          let Blacklist = await db.fetch(`Blacklist_${message.author.id}`);
    if(Blacklist === 'on') return message.channel.send(new Discord.MessageEmbed().setColor("#00BFFF").setDescription("You are blacklisted"))

  //Run the command
  cmd.run(client, message, args);
};