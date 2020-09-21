exports.run = async (client, message, args) => {
    const Discord = require("discord.js")
    const db = require("quick.db")
    const config = require("../config.js")
    let language = db.fetch(`language_${message.guild.id}`)
    if(language === null) language = config.basiclang
    const lang = require(`../language/${language}.js`)
    let inviteLink = "https://discord.com/api/oauth2/authorize?client_id=735878582878077069&permissions=32&scope=bot"

    
    let embed = new Discord.MessageEmbed()
       .setColor("#00BFFF").setTitle("RustyBot Invite") .setThumbnail(client.user.avatarURL()).setDescription(`:tada: Hello! I'm \`RustyBot\` I help to make giveaways quick and easy!
You can add me to your server with this link:

:link: Link invite: [Invite](${inviteLink})
:link: Link Server Support: [Support](https://discord.gg/yBD2Kbf)

Check out my commands by typing \`.ghelp\``)
    .setFooter(`Requested By: ${message.author.tag}`)
    message.channel.send(embed);
       
}