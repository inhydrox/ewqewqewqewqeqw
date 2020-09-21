exports.run = async (client, message) => {
 const { MessageEmbed } = require("discord.js");
  const Discord = require("discord.js");
const db = require("quick.db")
const request = require("request");
   var cats = [

    "cat cute",
    "cat beauty",
    "your cute cat",
  ];

  try {
    

    request(
      { json: true, url: "https://api.thecatapi.com/v1/images/search" },
      (err, res, json) => {
        if (err) {
          message.reply("There was an error!");
        } else {
          message.channel.send(
            new Discord.MessageEmbed()
            .setTitle(     cats[Math.floor(Math.random() * cats.length)])
              .setColor("#00BFFF")
              .setImage(json[0].url)
             
          );
        }
      }
    );
  } catch (err) {
    message.channel.send("There was an error!\n" + err).catch();
  }

}
