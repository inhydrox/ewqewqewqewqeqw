 const { MessageEmbed } = require("discord.js");
  const Discord = require("discord.js");
const request = require("request");
const db = require("quick.db")
exports.run = async (client, message, args) => {
var cats = [
    "dog cute",
    "dog beauty",
    "dog ",
    "your cute dog",
      
  ];
  try {
    

    request(
      { json: true, url: "https://dog.ceo/api/breeds/image/random" },
      (err, res, json) => {
        if (err) {
          message.reply("There was an error!");
        } else {
          message.channel.send(
            new Discord.MessageEmbed()
            .setTitle(     cats[Math.floor(Math.random() * cats.length)])
              .setColor("#00EFFF")
              .setImage(json.message)
             
          );
        }
      }
    );
  } catch (err) {
    message.channel.send("There was an error!\n" + err).catch();
  }
}
