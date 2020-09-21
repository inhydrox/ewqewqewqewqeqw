
const Discord = require("discord.js");
const superagent = require("snekfetch");
exports.run = async (client, message) => {
          const user = message.mentions.users.first();
          if(!user)
              return message.channel.send(new Discord.MessageEmbed().setDescription('Mention someone to slap!'));

          superagent.get('https://nekos.life/api/v2/img/slap')
              .end((err, response) => {
            const lewdembed = new Discord.MessageEmbed()
            .setTitle(user.username + " just got slapped by " + message.author.username)
            .setImage(response.body.url)
            .setColor(`RANDOM`)
            .setDescription((user.toString() + " got slapped by " + message.author.toString()))
            .setFooter(`RIP`)
            .setURL(response.body.url);
        message.channel.send(lewdembed);
          })
          }
 
