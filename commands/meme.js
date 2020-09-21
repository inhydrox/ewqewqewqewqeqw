const ms = require('ms');
exports.run = async (client, message, args) => {
const { MessageEmbed } = require("discord.js");

const randomPuppy = require("random-puppy");

        const subReddits = ["dankmeme", "meme", "me_irl"];

        const random = subReddits[Math.floor(Math.random() * subReddits.length)];

        const img = await randomPuppy(random);

        const embed = new MessageEmbed()

            .setColor("RANDOM")

            .setImage(img)

            .setTitle(`From /r/${random}`)

            .setURL(`https://reddit.com/r/${random}`);

        message.channel.send(embed);

    
}
