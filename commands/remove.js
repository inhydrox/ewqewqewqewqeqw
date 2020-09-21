exports.run = async (client, message, args) => {
 const { MessageEmbed } = require("discord.js");
const Discord = require("discord.js")
let embed2 = new Discord.MessageEmbed()
     .setDescription(`I Must Have Permission Manage Channels.`)  
      .setColor("#00BFFF").setTitle("Error!")
    

          if (!message.guild.member(message.client.user).hasPermission("MANAGE_CHANNELS"))
      return message.channel.send(embed2);
    let embed3 = new Discord.MessageEmbed()
      .setColor("#00BFFF").setTitle("Error!")
      
  .setDescription(` You only can run this command in a ticket channel!`);

    if (!message.channel.name.startsWith("ticket-")) {
            return message.channel.send(embed3);
    }
    let member = message.mentions.members.first();
          let embed4 = new Discord.MessageEmbed()
      .setColor("#00BFFF").setTitle("Error!")
      
    .setDescription (`Please Mention The User Or Bot Next Time`);

    if (!member || member.id === message.client.user.id) {
      return message.channel.send(embed4);
                var embed = new Discord.MessageEmbed()
      .setColor("BLACK")
      .setDescription("This Member is not in this Ticket To Remove Them")

    }
    if (
      !message.channel
        .permissionsFor(member)
        .has(["SEND_MESSAGES", "VIEW_CHANNEL", "READ_MESSAGE_HISTORY"])
    ) 
            return message.channel.send(embed);
    
                  message.channel.createOverwrite(member.id , {
                SEND_MESSAGES: false,
                VIEW_CHANNEL: false
            }); 
          var embed = new Discord.MessageEmbed()
      .setColor("#00BFFF").setTitle("Done!")
      .setDescription("Done, Successfully Removed <@"+member.user.id+"> From The This Ticket")
    message.channel.send(embed);
        }
        