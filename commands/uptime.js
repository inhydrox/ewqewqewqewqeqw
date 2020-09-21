 const { MessageEmbed } = require("discord.js");
exports.run = async (client, message, args) => {
  const Discord = require("discord.js")
const db = require("quick.db")
let uptime = message.client.uptime;

    let days = 0;
    let hours = 0;
    let minutes = 0;
    let seconds = 0;
    let notCompleted = true;

    while (notCompleted) {
      if (uptime >= 8.64e7) {
        days++;
        uptime -= 8.64e7;
      } else if (uptime >= 3.6e6) {
        hours++;
        uptime -= 3.6e6;
      } else if (uptime >= 60000) {
        minutes++;
        uptime -= 60000;
      } else if (uptime >= 1000) {
        seconds++;
        uptime -= 1000;
      }

      if (uptime < 1000) notCompleted = false;
    }
let embed99 = new MessageEmbed()
 .setAuthor(` Rusty | Uptime` , message.client.user.avatarURL() )
.setColor("#00BFFF")
.setDescription(` [${days}] day : [${hours}] hour : [${minutes}] min : [${seconds}] sec` );
    message.channel.send(embed99);
  }


