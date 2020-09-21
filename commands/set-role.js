exports.run = async (client, message, args) => {
    const db = require("quick.db")
    const config = require("../config.js")
    let language = db.fetch(`language_${message.guild.id}`)
    if(language === null) language = config.basiclang
    const lang = require(`../language/${language}.js`)
    const Discord = require("discord.js")
  //  if(args[0] === "role"){
        if(!message.member.hasPermission("MANAGE_GUILD")){
            return message.channel.send(new Discord.MessageEmbed().setColor("#00BFFF").setDescription("You dont have `MANAGE_GUILD` permission"))
        }

        let edit = db.fetch(`role_${message.guild.id}`)
        if(edit === null) edit = false
        var role = message.mentions.roles.first();
        if(!role) return message.channel.send(new Discord.MessageEmbed().setColor("#00BFFF").setDescription("You must mention the role to setrole giveaways"))
        db.set(`role_${message.guild.id}`, role.name)

        message.channel.send(new Discord.MessageEmbed().setDescription(`\`${role.name}\` has been changed successfully to giveaways`))
        //(ne "** **" + "`" + role.name + "`" + ".")

  //  }
}