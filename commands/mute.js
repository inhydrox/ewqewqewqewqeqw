const db = require("quick.db")
const ms = require("ms");
const { MessageEmbed } = require("discord.js");
exports.run = async (client, message, args) => {
  var args = message.content.split(" ").slice(1);
  var args2 = message.content.split(" ").slice(2);

let embeda7a = new MessageEmbed()
  .setColor("#00BFFF")
  .setDescription("You Must Have Premission Manage Roles")
   if (!message.guild.member(message.author).hasPermission("MANAGE_ROLES"))
    return message.channel.send(embeda7a);
  let embed00 = new MessageEmbed()
  .setColor("#00BFFF")
  .setDescription("I Must Have Premission Manage Roles")
  if (!message.guild.member(message.client.user).hasPermission("MANAGE_ROLES"))
    return message.channel.send(embed00)
    const user = message.guild.member( message.mentions.users.first() || message.guild.members.cache.get(args[0]) );
//let user = message.mentions.users.first() || message.guild.members.cache.get(args[0]);
    let embed = new MessageEmbed()
  .setColor("#00BFFF")
    .setDescription("Make mention a user next time.")
    if (!user) return message.channel.send(embed);
let mutetime = args[1];
  if(mutetime === null) mutetime = 999999999999; 
    //return message.reply("You didn't specify a time!");
    let embedii = new MessageEmbed()
  .setColor("#00BFFF")
  .setTitle("Error!")
  .setDescription(`You Cant Mute Yourself.`)
  if(message.author.id == user.id) return message.channel.send(embedii)
  if(message.guild.ownerID == user.id) return message.channel.send(new MessageEmbed().setDescription("You cant mute the ownership"))
  
   let mute = message.guild.roles.cache.find(role => role.name === "Muted");
    if (!mute)
      mute = await message.guild.roles.create({
        data: {
          name: "Muted",
          color: "#000000",
          permissions: []
        }
      });
    message.guild.channels.cache.forEach(async channel => {
      await channel.createOverwrite(mute, {
        SEND_MESSAGES: false,
        ADD_REACTIONS: false
      });
    });
  if(message.guild.member(user).roles.highest.position >= message.guild.member(message.client.user).roles.highest.position) return message.channel.send(new MessageEmbed().setColor("#00BFFF").setTitle("Error!").setDescription(`I Cant Mute \`${user.user.username}\` Because His Role Highest Than My Role!`))
       if(message.guild.member(user).roles.highest.position >= message.guild.member(message.author).roles.highest.position) return message.channel.send(new MessageEmbed().setTitle("Error!").setColor("#00BFFF").setDescription(`You Cant Mute \`${user.user.username}\` Because His Role Highest Than Your Role!`));
if(user.roles.cache.some(r=> r.id == mute)) return message.channel.send(new MessageEmbed().setColor("#00BFFF").setDescription("He is already muted "))
  message.guild.member(user).roles.add(mute);
  let embed55 = new MessageEmbed()
.setThumbnail(user.user.avatarURL({dynamic:true}))
  .setColor("#00BFFF")
.setTitle("Muted User ")
  .setDescription(" User : <@" +user.id +"> \`\`("+ user.id +")`\`\ \nMuted By : <@" + message.author.id +"> \`\`("+ message.author.id +")`\`\ \nTime: `"+(mutetime)+"`  ")
        .setFooter(`Requested By ${message.author.tag}`, message.author.avatarURL({dynamic:true}))
              .setTimestamp(); 
message.channel.send(embed55);
  setInterval(function(){ 
   user.roles.remove(mute.id); 
                   }, 
             ms(mutetime));
       }

