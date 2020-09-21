	   const { Database } = require("quickmongo");
const db = new Database("mongodb://ukeuc9uvjxfjhkonvmis:yYzBZ43o9CmtRDuemg9h@bgfweiijeayygum-mongodb.services.clever-cloud.com:27017/bgfweiijeayygum");
   const Discord = require("discord.js");
  let current    = 0;
exports.run = async (client, message) => {
  if(!message.guild.member(message.client.user).hasPermission("MANAGE_CHANNELS")) return;
  let role = await db.get(`ticketrole_${message.guild.id}`);
		if(role === null) role = "Support Team"
   let args = message.content.split(" ");
   let srole = await db.get(`ticketrole_${message.guild.id}`);
		if(srole === null) srole = "Support Team"
   let thisrole = message.guild.roles.cache.find(role => role.id === srole);
  var numbers = [1, 2, 3, 4];
   current++;
        if (!thisrole)
      thisrole = await message.guild.roles.create({
        data: {
          name: "Support Team",
          color: "#000000",
          permissions: []
        }
      });
	          const already = new Discord.MessageEmbed()
     .setDescription(`You AlReady Have The Ticket Cant Open Another Ticket , Sorry!`)  
     .setColor("BLACK");
        message.guild.channels.create(`ticket-${current}`, {type:"text"}).then(ticketx => {
            let role = message.guild.roles.cache.find(role => role.name ===`${srole}`);
            let role2 = message.guild.roles.cache.find(role => role.name ===`@everyone`);
            ticketx.createOverwrite(role, {
                SEND_MESSAGES: true,
                VIEW_CHANNEL: true
            });
            ticketx.createOverwrite(role2, {
                SEND_MESSAGES: false,
                VIEW_CHANNEL: false
            });
            ticketx.createOverwrite(message.author, {
                SEND_MESSAGES: true,
                VIEW_CHANNEL: true

            }); 
		
	    const d1 = new Discord.MessageEmbed()
     .setDescription(` Your ticket has been created <#${ticketx.id}>`)  
     .setColor("BLACK");
            message.channel.send(d1);
            const nonedear = new Discord.MessageEmbed()
     .setDescription(`Dear ${message.author}, \n\nThank you for reaching out to our support team!\n\nWe will get back to you as soon as possible\n\n`) 
     .setColor("#00BFFF")
     .setTimestamp();
            ticketx.send({embed: nonedear });
        }).catch(console.error);
}
