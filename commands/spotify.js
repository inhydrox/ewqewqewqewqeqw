const Discord = require("discord.js");
const convert = require("parse-ms");

exports.run = async (client, message, args) => {
    let user;
    if (message.mentions.users.first()) {
        user = message.mentions.users.first();
    } else {
        user = message.author;
    }

    let status;
  if (user.presence.activities.length === 1) status = user.presence.activities[0];
    else if (user.presence.activities.length > 1) status = user.presence.activities[1];

    if (user.presence.activities.length === 0 || status.name !== "Spotify" && status.type !== "LISTENING") {
        return message.channel.send(new Discord.MessageEmbed()
        .setColor(0x1ED768)
        .addField("Listen now on Spotify!", `<:spotify:755802262596485262> \`Not Listen On Spotify \``, false))
    }

    if (status !== null && status.type === "LISTENING" && status.name === "Spotify" && status.assets !== null) {
        let image = `https://i.scdn.co/image/${status.assets.largeImage.slice(8)}`,
            url = `https:/open.spotify.com/track/${status.syncID}`,
            name = status.details,
            artist = status.state,
            album = status.assets.largeText,
            timeStart = status.timestamps.start,
            timeEnd = status.timestamps.end,
            timeConvert = convert(timeEnd - timeStart);

        let minutes = timeConvert.minutes < 10 ? `0${timeConvert.minutes}` : timeConvert.minutes;
        let seconds = timeConvert.seconds < 10 ? `0${timeConvert.seconds}` : timeConvert.seconds;
        let time = `${minutes}:${seconds}`;

        const embed = new Discord.MessageEmbed()
        .setAuthor("Spotify Track Information", "https://image.flaticon.com/icons/svg/2111/2111624.svg")
        .setColor(0x1ED768)
        .setThumbnail(image)
        .addField("<:spotify:755802262596485262> Name:", name, true)
        .addField("<:spotify:755802262596485262> Album:", album, true)
        .addField("<:spotify:755802262596485262> Artist:", artist, true)
        .addField("<:spotify:755802262596485262> Duration:", time, false)
        .addField("<:spotify:755802262596485262> Listen now on Spotify!", `[\`${artist} - ${name}\`](${url})`, false)
        return message.channel.send(embed)
    }
}

