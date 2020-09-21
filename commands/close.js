const Discord = require("discord.js")
exports.run = async (bot, message) => {
     const { Database } = require("quickmongo");const db = new Database("mongodb://ukeuc9uvjxfjhkonvmis:yYzBZ43o9CmtRDuemg9h@bgfweiijeayygum-mongodb.services.clever-cloud.com:27017/bgfweiijeayygum");
var prefix = await db.fetch(`newprefix_${message.guild.id}`)
if(prefix === null) prefix = "."
     const d11x1xx = new Discord.MessageEmbed()
       .setDescription(`You do not have permission for that command!`)  
       .setColor("#00BFFF").setTitle("Error!")
         if(!message.member.hasPermission("MANAGE_CHANNELS")) 
      return message.channel.send(d11x1xx);
       const d11x1xxNOT = new Discord.MessageEmbed()
       .setDescription(`You only can run this command in a ticket channel!`)  
        .setColor("#00BFFF").setTitle("Error!")
    if (!message.channel.name.startsWith("ticket-")) return message.channel.send(d11x1xxNOT);
     const yes = new Discord.MessageEmbed()
       .setDescription(`Are you sure you want close this ticket? The messages will be gone\nsend \`\`${prefix}close\`\` again to close the ticket.\nYour request will be voided in 20 seconds.`)  
       .setColor("#00BFFF").setTitle("Done!")
  
      message.channel.send(yes)
      .then((m) => {
        message.channel.awaitMessages(response => response.content === `${prefix}close`, {
          max: 1,
          time: 20000,
          errors: ['time'],
        })
        .then((collected) => {
            message.channel.delete();
          }) 
         .catch(() => {
          const yesw = new Discord.MessageEmbed()
       .setDescription(` Ticket close timed out, the ticket was not closed.`)  
        .setColor("#00BFFF").setTitle("Error!")
        
            m.edit(yesw).then(m2 => {
               m2.delete();
            }, 7000);
           })})}