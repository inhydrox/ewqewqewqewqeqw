exports.run = async (client, message, args, config) => {
const Discord = require("discord.js")
const db = require("quick.db")
var prefix = db.fetch(`newprefix_${message.guild.id}`)
if(prefix === null) prefix = "."
let embed1 = new Discord.MessageEmbed()
.setTitle("Error!").setDescription("You Must Have Manage Roles Permission").setColor("#00BFFF")
  if(!message.guild.member(message.author).hasPermission("MANAGE_ROLES")) return message.channel.send(embed1)
  if(!message.guild.member(message.client.user).hasPermission("MANAGE_ROLES")) return;
  const member = message.mentions.users.first();
  if(!member) return message.channel.send(new Discord.MessageEmbed().setColor("#00BFFF")
                                            .setDescription("Missing argument, the `user` argument is required!").addField("Usage",`\`${prefix}role @Simple.\` - Gives/Removes the mentioned user role`).setTitle("Role Command").addField("Example Usage", `\`${prefix}ban @Simple.\` - Removes the mentioned user Admin\n\`${prefix}role @Simple. Admin\` - Gives the mentioned user role`).setFooter("Command category: Administrator"));
  const role = message.guild.roles.cache.find(role => role.name.startsWith(message.content.split(" ").slice(2).join(" ")));
  if(!role) return message.channel.send(new Discord.MessageEmbed().setDescription("I Cant Find This Role!").setColor("#00BFFF").setTitle("Error!"));
  if(!args[1]) return message.channel.send(new Discord.MessageEmbed()
                                            .setDescription("Missing argument, the `role` argument is required!").addField("Usage",`\`${prefix}role @Simple.\` - Gives/Removes the mentioned user role`).setTitle("Role Command").addField("Example Usage", `\`${prefix}ban @Simple.\` - Removes the mentioned user Admin\n\`${prefix}role @Simple. Admin\` - Gives the mentioned user role`).setColor("#00BFFF").setFooter("Command category: Administrator"));
                                           
  if(message.guild.member(member).roles.cache.find(c => c.id === role.id))
  return message.guild.member(member).roles.remove(role).then(() => {
  message.channel.send(new Discord.MessageEmbed().setColor("#00BFFF").setDescription("Changed Roles For `"+member.username+"`, -**"+role.name+"**"));
  }).catch(err => {console.log(err.message); message.channel.send(new Discord.MessageEmbed().setTitle("Error!").setDescription("This Role Is Above For Me").setColor("#00BFFF"))});
  message.guild.member(member).roles.add(role).then(() => {
  message.channel.send(new Discord.MessageEmbed().setColor("#00BFFF").setDescription("Changed Roles For `"+member.username+"`, +**"+role.name+"** "));
  }).catch(err => {console.log(err.message);message.channel.send(new Discord.MessageEmbed().setColor("#00BFFF").setDescription("This Role Is Above Me!"))});

  }
  
