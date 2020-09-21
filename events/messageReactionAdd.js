const Discord = require('discord.js');
const dateFormat = require('dateformat');
const fs = require('fs');
 const { Database } = require("quickmongo")

 const db = new Database("mongodb://ukeuc9uvjxfjhkonvmis:yYzBZ43o9CmtRDuemg9h@bgfweiijeayygum-mongodb.services.clever-cloud.com:27017/bgfweiijeayygum");

module.exports = async (bot, reaction, user) => {
  if(reaction.message.partial) await reaction.message.fetch();
  if(reaction.partial) await reaction.fetch();

  let message = reaction.message;
  if(!message) return;
  if(user.bot) return;

  let logsChannel = message.guild.channels.cache.find(c => c.id === db.get(`logs_${message.guild.id}`));

  let already = new Discord.MessageEmbed()
  .setAuthor(`⛔ Ticket`)
  .setDescription(`You already opened the ticket.`);

  let success = new Discord.MessageEmbed()
  .setDescription(`Dear ${user}, 

Thank you for reaching out to our support team!

We will get back to you as soon as possible`)
   .setTimestamp()
  .setFooter(bot.user.username, bot.user.avatarURL())

  let split = '';
  let usr = user.id.split(split);
  for (var i = 0; i < usr.length; i++) usr[i] = usr[i].trim();

  if(message.embeds.length === 1  && message.embeds[0].description === 'React with :envelope: to create a ticket.'){
    if(reaction.emoji.name === "✉️"){
      if(!message.guild.channels.cache.find(c => c.name === `ticket-${usr[0]}${usr[1]}${usr[2]}${usr[3]}`)){

        let role = message.guild.roles.cache.find(r => r.name === "Ticket Support");
        if(!role) {
          message.guild.roles.create({data:{name: "Ticket Support", permissions: 0}, reason: 'Le staff a besoin de ce rôle pour voir les tickets.'});
        //  message.channel.send(`S'il vous plaît, veuillez réagir une nouvelle fois au message de création de ticket.`).then(m => m.delete({timeout: 5000}).catch(e => {}));
          reaction.users.remove(user.id);
          return
        }
        let categoria = message.guild.channels.cache.find(c => c.name == "tickets" && c.type == "category");
        if(!categoria) categoria = await message.guild.channels.create("tickets", {type: "category", position: 1}).catch(e => {});

        let permsToHave = ['VIEW_CHANNEL', 'SEND_MESSAGES', 'ATTACH_FILES', 'READ_MESSAGE_HISTORY', 'ADD_REACTIONS']

        message.guild.channels.create(`ticket-${usr[0]}${usr[1]}${usr[2]}${usr[3]}`, { permissionOverwrites:[
          {
            deny: 'VIEW_CHANNEL',
            id: message.guild.id
          },
          {
            allow: permsToHave,
            id: user.id
          },
          {
            allow: permsToHave,
            id: role.id
          },
        ],
        parent: categoria.id,
        reason: `Cet utilisateur a besoin d'aide.`,
        topic: `**ID:** ${user.id} -- **Tag:** ${user.tag}`
      }).then(channel => {

        channel.send({embed: success})
        db.set(`ticket.ticket-${usr[0]}${usr[1]}${usr[2]}${usr[3]}`, { user: user.id });
      })
      reaction.users.remove(user.id);
      return;
    } else {
      reaction.users.remove(user.id);
      user.send({embed: already}).catch(e => {})
    }
    } else {
      reaction.users.remove(user.id);
    }
  }

  // ========================= //
}
