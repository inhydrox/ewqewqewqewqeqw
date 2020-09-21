exports.run = async (client, message, args, config) => {

    const Discord = require("discord.js")
const db = require("quick.db")
    let str = "";
   const role = message.guild.roles.cache.map(m => `${m} | Member \`${m.members.size}\``).join("\n") 
/* var role = message.guild.roles.cache.forEach(role => {
      str += " <@&" + role.id + ">\n";
    });*/
    let embed = new Discord.MessageEmbed()
    .setColor("#00BFFF")
    .setAuthor(`${message.guild.name} Roles`, message.guild.iconURL({dynamic:true}))
    .setThumbnail(message.guild.iconURL({dynamic:true}))
    .setTitle(`Total \`${message.guild.roles.cache.size}\` of roles `)
    .setDescription(`**Roles**\n${role}`)
    message.channel.send(embed);

}

