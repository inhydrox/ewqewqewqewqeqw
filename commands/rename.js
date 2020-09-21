const { Database } = require("quickmongo");
const tchannels = [];
const db = new Database("mongodb://ukeuc9uvjxfjhkonvmis:yYzBZ43o9CmtRDuemg9h@bgfweiijeayygum-mongodb.services.clever-cloud.com:27017/bgfweiijeayygum");
 const Discord = require("discord.js")
exports.run = async (client, message) => {
   let re = new Discord.MessageEmbed().setDescription("You Must Have Permission Manage Channels")
  if(!message.guild.member(message.author).hasPermission("MANAGE_CHANNELS"))
  return message.channel.send(re)
  let re2 = new Discord.MessageEmbed().setDescription("I Must have Permission Manage Channels")
  if(!message.guild.member(client.user).hasPermission("MANAGE_CHANNELS"))
  return message.channel.send(re2)
  let args = message.content.split(" ").slice(1).join(" ")
  let embed = new Discord.MessageEmbed()
  .setColor("#00BFFF").setTitle("Error!")
  .setDescription("Please Type The New Name To Change Ticket Name")
  if(!args) return message.channel.send(embed)
      let embed3 = new Discord.MessageEmbed()
  .setColor("#00BFFF")
  .setTitle("Error!")
    .setDescription(` You only can run this command in a ticket channel!`);
  
         if (
           !message.channel.name.startsWith("ticket-") &&
        !tchannels.includes(message.channel.id)
      )
                 return message.channel.send(embed3);
    let done = new Discord.MessageEmbed()
  .setColor("#00BFFF")
  .setTitle("Done!") 
    .setDescription(` Done Changed name To [ ${args} ]  `)
  message.channel.send(done)
      tchannels.splice(tchannels.indexOf(message.channel.id), 1);
      message.channel.setName(`ticket-${args}`)//لحد هنا

  }

