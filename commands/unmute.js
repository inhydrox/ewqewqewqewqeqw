const { MessageEmbed } = require("discord.js");
exports.run = async (client, message, args, config) => {
  const db = require("quick.db")

  var args = message.content.split(" ").slice(1);
        let embeda7a = new MessageEmbed()
  .setColor("#00BFFF")
  .setTitle("Error!")
  .setDescription("You Must Have Premission Manage Roles")
   if (!message.guild.member(message.author).hasPermission("MANAGE_ROLES"))
    return message.channel.send(embeda7a);
  let embed00 = new MessageEmbed()
  .setColor("#00BFFF")
  .setTitle("Error!")
  .setDescription("I Must Have Premission Manage Roles")
  if (!message.guild.member(message.client.user).hasPermission("MANAGE_ROLES"))
    return message.channel.send(embed00)
  const user = message.guild.member( message.mentions.users.first() || message.guild.members.cache.get(args[0]) );
  //let user = message.mentions.users.first() || message.guild.members.cache.get(args[0]);
let Blacklist = await db.fetch(`Blacklist_${message.author.id}`);
let blahh = new MessageEmbed()
  .setColor("#00BFFF")
  .setTitle("Sorry!")
.setDescription(" Sorry, Your Blacklisted Now Please Contact Bot Developers To Check You!")
if(Blacklist === 'on') return message.channel.send(blahh)
    let embed = new MessageEmbed()
  .setColor("#00BFFF")
  .setTitle("Error!")
    .setDescription("Please Mention The User Next Time")
    if (!user) return message.channel.send(embed);
      let embedii = new MessageEmbed()
  .setColor("#00BFFF")
.setTitle("Error!")
  .setDescription(`You Cant UnMute Yourself.`)
  if(message.author.id == user.id) return message.channel.send(embedii)

    let muterole = message.guild.roles.cache.find(role => role.name === "Muted") 
   if(!muterole){
      try{
        muterole =  message.guild.roles.create({
  data: {
    name: 'Muted',
    color: '#000000',
  },
  reason: 'Mute role is needed for giving user a mute.',
})
        message.guild.channels.cache.forEach(async (channel, id) => {
         channel.overwritePermissions([
  {
     id: muterole.id,
     deny: ['SEND_MESSAGES'],
  },
], 'Needed to change permissions');
        });
      }catch(e){
        console.log(e.stack);
      }
    }
            if(message.guild.member(user).roles.highest.position >= message.guild.member(message.client.user).roles.highest.position) return message.channel.send(new MessageEmbed().setColor("#00BFFF").setTitle("Error!").setDescription(`I Cant unmute \`${user.user.username}\` Because His Role Highest Than My Role!`))
            if(message.guild.member(user).roles.highest.position >= message.guild.member(message.author).roles.highest.position) return message.channel.send(new MessageEmbed().setTitle("Error!").setColor("#00BFFF").setDescription(`You Cant unmute \`${user.user.username}\` Because His Role Highest Than Your Role!`));
if(!user.roles.cache.some(r=> r.id == muterole)) return message.channel.send(new MessageEmbed().setColor("#00BFFF").setDescription("He Didnt Take mute "))
     message.guild.member(user).roles.remove(muterole);

  let embed55 = new MessageEmbed()
.setThumbnail(user.user.avatarURL({dynamic:true}))
  .setColor("#00BFFF")
.setTitle("UnMuted User ")
  .setDescription(" User : <@" +user.id +"> \`\`("+ user.id +")`\`\ \nUnMuted By : <@" + message.author.id +"> \`\`("+ message.author.id +")`\`\ ")
        .setFooter(`Requested By ${message.author.tag}`, message.author.avatarURL())
              .setTimestamp(); 
message.channel.send(embed55);

  }
