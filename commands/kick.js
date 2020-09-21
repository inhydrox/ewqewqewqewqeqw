const { MessageEmbed } = require("discord.js");
exports.run = async (bot, Message) => {
 const { Database } = require("quickmongo")
 const db = new Database("mongodb://ukeuc9uvjxfjhkonvmis:yYzBZ43o9CmtRDuemg9h@bgfweiijeayygum-mongodb.services.clever-cloud.com:27017/bgfweiijeayygum");

  var prefix = await db.fetch(`newprefix_${Message.guild.id}`)
  if(prefix === null) prefix = "."
let embed = new MessageEmbed()
  .setColor("BLACK")
  .setDescription(`You Must Have Permission Kick Members`)
if (!Message.guild.member(Message.author).hasPermission("KICK_MEMBERS"))
return Message.channel.send(embed);
  let embed2 = new MessageEmbed()
  .setColor("#00BFFF")
.setTitle("Error!")
  .setDescription(`I Must Have Premission Kick Members `)
if (!Message.guild.member(Message.client.user).hasPermission("KICK_MEMBERS"))
return Message.channel.send(embed2);
var args = Message.content.split(" ");
var reason = Message.content.split(" ")[2];
  if(!reason) reason = "No Reason"
let men = Message.mentions.users.first() || Message.guild.members.cache.get(args[1]);

var embed11 = new MessageEmbed()
              .setColor("#00BFFF")
  .setDescription("Missing argument, the `user` argument is required!").addField("Usage",`\`${prefix}kick @Simple.\` - Kickes the mentioned user with the given reason`).setTitle("Kick Command").addField("Example Usage", `\`${prefix}kick @Simple.\` - Kicks the user without reason\n\`${prefix}kick @Simple. Spamming\` - Kicks the user with reason`).setFooter("Command category: Administrator");
if(!men) return Message.channel.send(embed11);
      let embedii = new MessageEmbed()
  .setDescription(`You Cant Kick Yourself.`)
  if(Message.author.id == men.id) return Message.channel.send(embedii)
  if(men.id === Message.guild.ownerID) return;
          if(Message.guild.member(men).roles.highest.position >= Message.guild.member(Message.client.user).roles.highest.position) return Message.channel.send(new MessageEmbed().setColor("#00BFFF").setTitle("Error!").setDescription(`I Cant Kick \`${men.username}\` Because His Role Highest Than My Role!`))
          if(Message.guild.member(men).roles.highest.position >= Message.guild.member(Message.author).roles.highest.position) return Message.channel.send(new MessageEmbed().setTitle("Error!").setColor("#00BFFF").setDescription(`You Cant Kick \`${men.username}\` Because His Role Highest Than Your Role!`));

Message.guild.member(men).kick({"reason": reason});
      let embedban = new MessageEmbed()
  .setColor("BLACK").setTitle("Error!")
  .setDescription("You Cant Kick This User <@" + men + ">");
  if (!Message.guild.member(men).kickable)
return Message.channel.send(embedban)

      let embed99 = new MessageEmbed()
      .setThumbnail(men.avatarURL({dynamic:true}))
.setTitle("Kicked User ")
.setColor("#00BFFF")
  .setDescription(" User : <@" +men.id +"> \`\`("+ men.id +")`\`\ \nKicked By : <@" + Message.author.id +"> \`\`("+ Message.author.id +")`\`\ ")
        .setFooter(`Requested By ${Message.author.tag}`, Message.author.avatarURL())
              .setTimestamp(); 
Message.channel.send(embed99)
}
