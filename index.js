const Discord = require("discord.js");
const config = require("./config.js");
const client = new Discord.Client();
const fs = require("fs");
client.config = config;
const { GiveawaysManager } = require("discord-giveaways");
const db = require("quick.db");
if(!db.get("giveaways")) db.set("giveaways", []);

const GiveawayManagerWithOwnDatabase = class extends GiveawaysManager {

    // This function is called when the manager needs to get all the giveaway stored in the database.
    async getAllGiveaways(){
        // Get all the giveaway in the database.
        return db.get("giveaways");
    }

    // This function is called when a giveaway needs to be saved in the database (when a giveaway is created or when a giveaway is edited).
    async saveGiveaway(messageID, giveawayData){
        // Add the new one.
        db.push("giveaways", giveawayData);
        return true;
    }

    async editGiveaway(messageID, giveawayData){
        // Gets all the current giveaways
        const giveaways = db.get("giveaways");
        // Remove the old giveaway from the current giveaways ID
        const newGiveawaysArray = giveaways.filter((giveaway) => giveaway.messageID !== messageID);
        // Push the new giveaway to the array
        newGiveawaysArray.push(giveawayData);
        // Save the updated array
        db.set("giveaways", newGiveawaysArray);
        return true;
    }

    // This function is called when a giveaway needs to be deleted from the database.
    async deleteGiveaway(messageID){
        // Remove the giveaway from the array
        const newGiveawaysArray = db.get("giveaways").filter((giveaway) => giveaway.messageID !== messageID);
        // Save the updated array
        db.set("giveaways", newGiveawaysArray);
        return true;
    }

};

// Create a new instance of your new class
const manager = new GiveawayManagerWithOwnDatabase(client, {
    storage: false,
    updateCountdownEvery: 5000,
    default: {
        botsCanWin: false,
        exemptPermissions: [],
        embedColor: "#00BFFF",
        reaction: config.reaction
    }
});
client.giveawaysManager = manager;
// We now have a client.giveawaysManager property to manage our giveaways!


fs.readdir("./events/", (_err, files) => {
    files.forEach((file) => {
        if(!file.endsWith(".js")) return;
        const event = require(`./events/${file}`);
        let eventName = file.split(".")[0];
        console.log(`(👌) Event loaded : ${eventName} !`);
        client.on(eventName, event.bind(null, client));
        delete require.cache[require.resolve(`./events/${file}`)];
    });
});
client.queue = new Map();
client.commands = new Discord.Collection();

fs.readdir("./commands/", (_err, files) => {
    files.forEach((file) => {
        if(!file.endsWith(".js")) return;
        let props = require(`./commands/${file}`);
        let commandName = file.split(".")[0];
        client.commands.set(commandName, props);
        console.log(`[📕] Command loaded: ${commandName}!`);
    });
});
client.on("message", async message =>{
  const { Database } = require("quickmongo");
  const db = new Database("mongodb://ukeuc9uvjxfjhkonvmis:yYzBZ43o9CmtRDuemg9h@bgfweiijeayygum-mongodb.services.clever-cloud.com:27017/bgfweiijeayygum");
if(message.author.bot) return;
var prefix = await db.fetch(`newprefix_${message.guild.id}`)
if(prefix === null) prefix = "."
  if(message.content === "<@735878582878077069>") return message.channel.send(new Discord.MessageEmbed().setDescription(`The prefix is ${prefix}`))
})
client.on('message', async (jamel) => {
if(jamel.author.bot) return;
  const { Database } = require("quickmongo");const db = new Database("mongodb://ukeuc9uvjxfjhkonvmis:yYzBZ43o9CmtRDuemg9h@bgfweiijeayygum-mongodb.services.clever-cloud.com:27017/bgfweiijeayygum");
  
    var prefix = await db.fetch(`newprefix_${jamel.guild.id}`)
    if (prefix == null) prefix = '.'
    var args = jamel.content.split(" ");
  if (jamel.content.startsWith(prefix + "prefix")) {
    if(!jamel.guild.member(jamel.author).hasPermission("ADMINISTRATOR")) return jamel.channel.send(new Discord.MessageEmbed().setColor("#00BFFF").setDescription("You must have adminstrator permission"))
if(!jamel.guild.member(client.user).hasPermission("ADMINISTRATOR"))
return; 
if (!args[1])
return jamel.channel.send(new Discord.MessageEmbed().setDescription(`The Prefix is \`${prefix}\``).setColor("#00BFFF"))

db.set(`newprefix_${jamel.guild.id}`, args[1])
jamel.channel.send(new Discord.MessageEmbed().setDescription(`The prefix has been set to \`${args[1]}\``).setColor("#00BFFF"))

}
});
client.on('guildCreate', server => {
  client.user.setActivity(`.ghelp | Serve ${client.guilds.cache.size} Server`);
})
client.on('guildDelete', server => {
  client.user.setActivity(`.ghelp | Serve ${client.guilds.cache.size} Server`);
})
client.on('guildCreate', server => {
  let channel = client.channels.cache.get('755028806930006067')
  let embed = new Discord.MessageEmbed()
  .setColor('GREEN')
  .setTitle('New Server')
  .setDescription(`Bot Servers now : \`${client.guilds.cache.size}\`
  Bot users : \`${client.users.cache.size}\`
  Bot Channels :  \`${client.channels.cache.size}\`
`)
  channel.send(embed)
})
client.on('guildDelete', server => {
  let channel = client.channels.cache.get('755028806930006067')
  client.user.setActivity(`.ghelp | Serve ${client.guilds.cache.size} Server`);
  let embed = new Discord.MessageEmbed()
  .setColor('#00BFFF')
  .setTitle('Leave Server')
  .setDescription(`Bot Server now : \`${client.guilds.cache.size}\`
Bot Users : \`${client.users.cache.size}\`
Bot Channels :  \`${client.channels.cache.size}\` `)
  channel.send(embed)
})
client.on("message",async message=>{
  const { Database } = require("quickmongo");
  const db = new Database("mongodb://ukeuc9uvjxfjhkonvmis:yYzBZ43o9CmtRDuemg9h@bgfweiijeayygum-mongodb.services.clever-cloud.com:27017/bgfweiijeayygum");
  
 await db.add(`ggff_${message.author.id}`, 1)
  });
  client.on("message", async message => {
    if(message.author.bot) return;
  const { Database } = require("quickmongo");const db = new Database("mongodb://ukeuc9uvjxfjhkonvmis:yYzBZ43o9CmtRDuemg9h@bgfweiijeayygum-mongodb.services.clever-cloud.com:27017/bgfweiijeayygum");
    
    var prefix = await db.fetch(`newprefix_${message.guild.id}`)  
    if (prefix == null) prefix = '.'
    
    if(!message.content.startsWith(prefix)) return;
    if(message.content===(prefix + `avatar server`)|| message.content  === prefix +"icon"){
      let dxx = new Discord.MessageEmbed()
  .setColor("080101")

      .setAuthor(message.guild.name, message.guild.iconURL())
      .setTitle("Avatar Link")
      .setURL(message.guild.iconURL())
      .setImage(message.guild.iconURL({dynamic:true, size:1024}))
      .setFooter(`Requested By ${message.author.tag}`, message.author.avatarURL())
      message.channel.send(dxx)
    }else{
      if(message.content.toLowerCase().split(" ")[0] === `${prefix}avatar`){
        let args = message.content.split(" ")
        let user = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[1]));
if(user){
    user = user.user
    }else{
    user = message.author
    }
    let embed = new Discord.MessageEmbed()
  .setColor("080101")
  
  .setAuthor(`${user.tag}`,user.displayAvatarURL({dynamic:true})) 
  .setTitle("Avatar Link")
  .setURL(user.displayAvatarURL({dynamic:true}))
  .setImage(user.displayAvatarURL({dynamic:true, size:1024}))
  .setFooter(`${user.tag}`,user.displayAvatarURL({dynamic:true})) 
      message.channel.send(embed)
  
    }
  }})
client.on('guildMemberAdd', async(member) => {
  const { Database } = require("quickmongo");
  const db = new Database("mongodb://ukeuc9uvjxfjhkonvmis:yYzBZ43o9CmtRDuemg9h@bgfweiijeayygum-mongodb.services.clever-cloud.com:27017/bgfweiijeayygum");
  
    let autoroleData = await db.fetch(`roletest_${member.guild.id}`)
    if(autoroleData){
        let autorole = member.guild.roles.cache.find(c => c.id == autoroleData)
        if(autorole) {
            member.roles.add(autorole)
        }
    }})
client.on("guildMemberAdd", async (member) => {
  const { Database } = require("quickmongo");const db = new Database("mongodb://ukeuc9uvjxfjhkonvmis:yYzBZ43o9CmtRDuemg9h@bgfweiijeayygum-mongodb.services.clever-cloud.com:27017/bgfweiijeayygum");
    if (!member.guild.member(client.user).hasPermission("SEND_MESSAGES")) return;
let chx = await db.get(`welcome_${member.guild.id}`); 
let words = await db.get(`message_${member.guild.id}`)
let autorolr = await db.get(`autorole_${member.guild.id}`)
if(words === null) words = `Welcome ${member} To ${member.guild.name} We Are ${member.guild.memberCount}`;
if(chx === null) {return;}
let sowner = words.replace("[sowner]", member.guild.owner);
let s = sowner.replace('[server]' ,member.guild.name);
let u = s.replace("[user]", member);
let all = u.replace("[count]",member.guild.memberCount)
  client.channels.cache.get(chx).send(all);
})
client.on("guildMemberAdd", async (member) => {
  const { Database } = require("quickmongo");const db = new Database("mongodb://ukeuc9uvjxfjhkonvmis:yYzBZ43o9CmtRDuemg9h@bgfweiijeayygum-mongodb.services.clever-cloud.com:27017/bgfweiijeayygum");
let ch1x = await db.get(`logchannel_${member.guild.id}`); 
if(ch1x === null) {return;}
    let embed = new Discord.MessageEmbed()
    .setTitle("New User joined")
    .setAuthor(member.user.tag).setThumbnail(member.user.avatarURL({dynamic:true}))
    .setDescription(`${member} Has joined the server`)
  client.channels.cache.get(ch1x).send(embed);
    })
  client.on("messageDelete", async message =>{
  const { Database } = require("quickmongo");const db = new Database("mongodb://ukeuc9uvjxfjhkonvmis:yYzBZ43o9CmtRDuemg9h@bgfweiijeayygum-mongodb.services.clever-cloud.com:27017/bgfweiijeayygum");
    
      if (!message.guild.member(client.user).hasPermission("EMBED_LINKS"))
    return;
  if (!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES"))
    return;
          if(!message.guild.members.cache.get(client.user.id).hasPermission(["VIEW_AUDIT_LOG"]))return;
      let logChannel = await db.get(`logchannel_${message.guild.id}`)
  if (!logChannel) return;
  let messageDelete = new Discord.MessageEmbed()
    .setAuthor(message.author.tag, message.author.avatarURL({dynamic:true}))
    .setColor("#00BFFF")
    .setThumbnail(message.author.avatarURL({dynamic:true}))
    .setDescription(`:wastebasket: Message sent by ${message.author} deleted in ${message.channel}.`)
  .addField("Message:",`${message}`)
    .setTimestamp()
    .setFooter(message.guild.name);
  client.channels.cache.get(logChannel).send(messageDelete);
});
client.on("messageUpdate", async(oldMessage, newMessage) => {
  const { Database } = require("quickmongo");const db = new Database("mongodb://ukeuc9uvjxfjhkonvmis:yYzBZ43o9CmtRDuemg9h@bgfweiijeayygum-mongodb.services.clever-cloud.com:27017/bgfweiijeayygum");
  
  if (oldMessage.author.bot) return;
  if (!oldMessage.channel.type === "dm") return;
  if (!oldMessage.guild.member(client.user).hasPermission("EMBED_LINKS"))
    return;
  if (!oldMessage.guild.member(client.user).hasPermission("MANAGE_MESSAGES"))
    return;
          if(!oldMessage.guild.members.cache.get(client.user.id).hasPermission(["VIEW_AUDIT_LOG"]))return;
      let logChannel = await db.get(`logchannel_${oldMessage.guild.id}`)
  if (!logChannel) return;
  if (oldMessage.content.startsWith("https://")) return;

  let messageUpdate = new Discord.MessageEmbed()
    .setThumbnail(oldMessage.author.avatarURL({dynamic:true}))
    .setAuthor(oldMessage.author.tag, oldMessage.author.avatarURL({dynamic:true}))
    .setColor("#00BFFF")
    .setDescription(`:pencil2: Message sent by ${oldMessage.author} edited in ${oldMessage.channel}.`).addField("Old:",`\`\`\`${oldMessage}\`\`\``).addField("New:",`\`\`\`${newMessage}\`\`\``)
    .setTimestamp()
    .setFooter(oldMessage.guild.name)
  client.channels.cache.get(logChannel).send(messageUpdate);
});
  client.on("roleCreate", async role => {
  const { Database } = require("quickmongo");const db = new Database("mongodb://ukeuc9uvjxfjhkonvmis:yYzBZ43o9CmtRDuemg9h@bgfweiijeayygum-mongodb.services.clever-cloud.com:27017/bgfweiijeayygum");
    
  if (!role.guild.member(client.user).hasPermission("EMBED_LINKS")) return;
          if(!role.guild.members.cache.get(client.user.id).hasPermission(["VIEW_AUDIT_LOG"]))return;
  if (!role.guild.member(client.user).hasPermission("VIEW_AUDIT_LOG")) return
      let logChannel = await db.get(`logchannel_${role.guild.id}`)
  if (!logChannel) return;
  role.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL({dyanmic:true});
    let roleCreate = new Discord.MessageEmbed()
      .setAuthor(role.guild.name)
      .setThumbnail(userAvatar)
      .setDescription(`:family_mmb: \`${role.name}\` role has been created.
      `)
      .setColor("#00BFFF")
      .setTimestamp()
      .setFooter(role.guild.name);
  client.channels.cache.get(logChannel).send(roleCreate);
  });
});


  client.on("roleDelete", async role => {
  const { Database } = require("quickmongo");const db = new Database("mongodb://ukeuc9uvjxfjhkonvmis:yYzBZ43o9CmtRDuemg9h@bgfweiijeayygum-mongodb.services.clever-cloud.com:27017/bgfweiijeayygum");
  if (!role.guild.member(client.user).hasPermission("EMBED_LINKS")) return;
   if(!role.guild.members.cache.get(client.user.id).hasPermission(["VIEW_AUDIT_LOG"]))return;
  if (!role.guild.member(client.user).hasPermission("VIEW_AUDIT_LOG")) return;
      let logChannel = await db.get(`logchannel_${role.guild.id}`)
  if (!logChannel) return;
  role.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL({dynamic:true});
    let roleDelete = new Discord.MessageEmbed()
      .setAuthor(role.guild.name)
      .setThumbnail(userAvatar)
      .setDescription(`:family_mmb: \`${role.name}\` role has been deleted`)
      .setColor("#00BFFF")
      .setTimestamp()
      .setFooter(role.guild.name)
  client.channels.cache.get(logChannel).send(roleDelete);
  });
});
client.on("roleUpdate", async(oldRole, newRole) => {
  const { Database } = require("quickmongo");const db = new Database("mongodb://ukeuc9uvjxfjhkonvmis:yYzBZ43o9CmtRDuemg9h@bgfweiijeayygum-mongodb.services.clever-cloud.com:27017/bgfweiijeayygum");
  if (!oldRole.guild.member(client.user).hasPermission("EMBED_LINKS")) return;
   if(!oldRole.guild.members.cache.get(client.user.id).hasPermission(["VIEW_AUDIT_LOG"]))return;
  if (!oldRole.guild.member(client.user).hasPermission("VIEW_AUDIT_LOG"))
    return;
      let logChannel = await db.get(`logchannel_${oldRole.guild.id}`)
  if (!logChannel) return;

  oldRole.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL({dynamic:true});
    if (oldRole.name !== newRole.name) {
      let roleUpdateName = new Discord.MessageEmbed()
      .setAuthor(oldRole.guild.name)
        .setThumbnail(userAvatar)
.setColor("#00BFFF")
        .setDescription(`:family_mmb: \`${newRole.name}\` role has been updated.`
        ).addField("Old:",`${oldRole.name}`).addField("New:",`${newRole.name}`)
        .setTimestamp()
        .setFooter(oldRole.guild.name);
  client.channels.cache.get(logChannel).send(roleUpdateName);
    }
    if (oldRole.hexColor !== newRole.hexColor) {
      if (oldRole.hexColor === "#000000") {
        var oldColor = "Default";
      } else {
        var oldColor = oldRole.hexColor;
      }
      if (newRole.hexColor === "#000000") {
        var newColor = "Default";
      } else {
        var newColor = newRole.hexColor;
      }
      let roleUpdateColor = new Discord.MessageEmbed()
            .setAuthor(oldRole.guild.name)
        .setThumbnail(userAvatar)
        .setColor("#00BFFF")
        .setDescription(`:family_mmb: \`${oldRole.name}\` role has been updated by <@${userID}>.`
        ).addField("Old Color:",`${oldColor}`).addField("New Color:",`${newColor}`)
        .setTimestamp()
        .setFooter(oldRole.guild.name);
  client.channels.cache.get(logChannel).send(roleUpdateColor);
    }
  });
});

client.on("channelCreate", async channel => {
  const { Database } = require("quickmongo");const db = new Database("mongodb://ukeuc9uvjxfjhkonvmis:yYzBZ43o9CmtRDuemg9h@bgfweiijeayygum-mongodb.services.clever-cloud.com:27017/bgfweiijeayygum");
  if (!channel.guild) return;
  if (!channel.guild.member(client.user).hasPermission("EMBED_LINKS")) return;
   if(!channel.guild.members.cache.get(client.user.id).hasPermission(["VIEW_AUDIT_LOG"]))return;
  if (!channel.guild.member(client.user).hasPermission("VIEW_AUDIT_LOG"))
    return;
      let logChannel = await db.get(`logchannel_${channel.guild.id}`)
  if (!logChannel) return;

  if (channel.type === "text") {
    var roomType = "Text";
  } else if (channel.type === "voice") {
    var roomType = "Voice";
  } else if (channel.type === "category") {
    var roomType = "Category";
  }

  channel.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL({dynamic:true});

    let channelCreate = new Discord.MessageEmbed()
.setAuthor(channel.guild.name)
    .setThumbnail(userAvatar)
      .setDescription(`:house: Channel Created: \`${channel.name}\``)
      .setColor("#00BFFF")
      .setTimestamp()
      .setFooter(channel.guild.name);
  client.channels.cache.get(logChannel).send(channelCreate);
  });
});
client.on("channelDelete", async channel => {
  const { Database } = require("quickmongo");const db = new Database("mongodb://ukeuc9uvjxfjhkonvmis:yYzBZ43o9CmtRDuemg9h@bgfweiijeayygum-mongodb.services.clever-cloud.com:27017/bgfweiijeayygum");
  if (!channel.guild) return;
  if (!channel.guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!channel.guild.member(client.user).hasPermission("VIEW_AUDIT_LOG"))
    return;
   if(!channel.guild.members.cache.get(client.user.id).hasPermission(["VIEW_AUDIT_LOG"]))return;
      let logChannel = await db.get(`logchannel_${channel.guild.id}`)
  if (!logChannel) return;
  if (channel.type === "text") {
    var roomType = "Text";
  } else if (channel.type === "voice") {
    var roomType = "Voice";
  } else if (channel.type === "category") {
    var roomType = "Category";
  }
  channel.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL({dynamic:true});
    let channelDelete = new Discord.MessageEmbed()
    .setAuthor(channel.guild.name)
    .setThumbnail(userAvatar)
      .setDescription(`:house: Channel Deleted: \`${channel.name}\``)
      .setColor("#00BFFF")
      .setTimestamp()
      .setFooter(channel.guild.name);
  client.channels.cache.get(logChannel).send(channelDelete);
  });
});

client.on("channelUpdate", async (oldChannel, newChannel) => {
  const { Database } = require("quickmongo");const db = new Database("mongodb://ukeuc9uvjxfjhkonvmis:yYzBZ43o9CmtRDuemg9h@bgfweiijeayygum-mongodb.services.clever-cloud.com:27017/bgfweiijeayygum");
   if (!newChannel.guild) return;
  if (!newChannel.guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!newChannel.guild.member(client.user).hasPermission("VIEW_AUDIT_LOG"))
    return;
   if(!newChannel.guild.members.cache.get(client.user.id).hasPermission(["VIEW_AUDIT_LOG"]))return;
      let logChannel = await db.get(`logchannel_${newChannel.guild.id}`)
  if (!logChannel) return;
     if (oldChannel.type === "text") {
    var channelType = "Text";
  } else if (oldChannel.type === "voice") {
    var channelType = "Voice";
  } else if (oldChannel.type === "category") {
    var channelType = "Category";
  }

  oldChannel.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL({dynamic:true});

    if (oldChannel.name !== newChannel.name) {
      let newName = new Discord.MessageEmbed()
       .setAuthor(oldChannel.guild.name)
    .setThumbnail(userAvatar)
      .setDescription(`:house: Channel Updated: \`${newChannel.name}\``)
      .setColor("#00BFFF").addField("Old Name:",`${oldChannel}`).addField("New Name:",`${newChannel}`).addField("Channel Type:",`${channelType}`)
      .setTimestamp()
      .setFooter(newChannel.guild.name);
  client.channels.cache.get(logChannel).send(newName);
    }
    if (oldChannel.topic !== newChannel.topic) {
      let newTopic = new Discord.MessageEmbed()
            .setAuthor(oldChannel.guild.name)
    .setThumbnail(userAvatar)
      .setDescription(`:house: Channel Updated: \`${newChannel.name}\``)
      .setColor("#00BFFF").addField("Old Topic:",`${oldChannel.topic || "NULL"}`).addField("New Name:",`${newChannel.topic || "NULL"}`)
      .setTimestamp()
      .setFooter(newChannel.guild.name);
  client.channels.cache.get(logChannel).send(newTopic);
    }
  });
});
client.on("guildBanAdd", async(guild, user) => {
  const { Database } = require("quickmongo");const db = new Database("mongodb://ukeuc9uvjxfjhkonvmis:yYzBZ43o9CmtRDuemg9h@bgfweiijeayygum-mongodb.services.clever-cloud.com:27017/bgfweiijeayygum");
  if (!guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!guild.member(client.user).hasPermission("VIEW_AUDIT_LOG")) return;
if(!guild.members.cache.get(client.user.id).hasPermission(["VIEW_AUDIT_LOG"]))return;
      let logChannel = await db.get(`logchannel_${guild.id}`)
  if (!logChannel) return;
  guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
var userAvatar = logs.entries.first().executor.avatarURL({dynamic:true});
    if (userID === client.user.id) return;
    let banInfo = new Discord.MessageEmbed()
       .setAuthor(user.tag, user.avatarURL({dynamic:true}))
      .setThumbnail(user.avatarURL({dynamic:true}))
      .setColor("#00BFFF")
      .setDescription(
         `:airplane: ${user} banned from the server.`)
      .setTimestamp()
      .setFooter(guild.name);
  client.channels.cache.get(logChannel).send(banInfo);
  });
});

client.on("guildBanRemove", async (guild, user) => {
  const { Database } = require("quickmongo");const db = new Database("mongodb://ukeuc9uvjxfjhkonvmis:yYzBZ43o9CmtRDuemg9h@bgfweiijeayygum-mongodb.services.clever-cloud.com:27017/bgfweiijeayygum");
  if (!guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!guild.member(client.user).hasPermission("VIEW_AUDIT_LOG")) return;
  if(!guild.members.cache.get(client.user.id).hasPermission(["VIEW_AUDIT_LOG"]))return;
      let logChannel = await db.get(`logchannel_${guild.id}`)
  if (!logChannel) return;
  guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL({dynamic:true});
    if (userID === client.user.id) return;
    let unbanInfo = new Discord.MessageEmbed()
       .setAuthor(user.tag, user.avatarURL({dynamic:true}))
      .setThumbnail(user.avatarURL({dynamic:true}))
      .setColor("#00BFFF")
      .setDescription(
         `:airplane_arriving: ${user} unbanned.`)
      .setTimestamp()
      .setFooter(guild.name);
  client.channels.cache.get(logChannel).send(unbanInfo);
  });
});
client.on("guildMemberUpdate", async (oldMember, newMember) => {
  const { Database } = require("quickmongo");const db = new Database("mongodb://ukeuc9uvjxfjhkonvmis:yYzBZ43o9CmtRDuemg9h@bgfweiijeayygum-mongodb.services.clever-cloud.com:27017/bgfweiijeayygum");
  if (!oldMember.guild) return;
      let logChannel = await db.get(`logchannel_${oldMember.guild.id}`)
  if (!logChannel) return;

  oldMember.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL({dynamic:true});
    var userTag = logs.entries.first().executor.tag;

    if (oldMember.nickname !== newMember.nickname) {
      if (oldMember.nickname === null) {
        var oldNM = "Original Name";
      } else {
        var oldNM = oldMember.nickname;
      }
      if (newMember.nickname === null) {
        var newNM = "Original Name";
      } else {
        var newNM = newMember.nickname;
      }

      let updateNickname = new Discord.MessageEmbed()
.setAuthor(userTag, userAvatar)
        .setColor("#00BFFF")
        .setDescription(`${oldMember}'s nickname has been changed.`)
      .addField("New Nickname:",`${newNM}`)
        .setTimestamp()
        .setFooter(oldMember.guild.name);
  client.channels.cache.get(logChannel).send(updateNickname);
    }
    if (oldMember.roles.cache.size < newMember.roles.cache.size) {
      let role = newMember.roles.cache
        .filter(r => !oldMember.roles.cache.has(r.id))
        .first();
      let roleAdded = new Discord.MessageEmbed()
.setAuthor(userTag, userAvatar)
      .setThumbnail(userAvatar)
        .setColor("#00BFFF")
        .setDescription(`:writing_hand: ${oldMember} has been updated.`
        ).addField("Role:",`✅ ${role.name}`)
        .setFooter(oldMember.guild.name)
        .setTimestamp()
  client.channels.cache.get(logChannel).send(roleAdded);
    }
    if (oldMember.roles.cache.size > newMember.roles.cache.size) {
      let role = oldMember.roles.cache
        .filter(r => !newMember.roles.cache.has(r.id))
        .first();
      let roleRemoved = new Discord.MessageEmbed()
      .setAuthor(oldMember.user.tag, oldMember.user.avatarURL())
      .setThumbnail(userAvatar)
        .setColor("#00BFFF")
        .setDescription(`:writing_hand: ${oldMember} has been updated.`
        ).addField("Role:",`⛔ ${role.name}`)
        
        .setTimestamp()
        .setFooter(oldMember.guild.name);
  client.channels.cache.get(logChannel).send(roleRemoved);
    }
  });
  if (oldMember.guild.owner.id !== newMember.guild.owner.id) {
    let newOwner = new Discord.MessageEmbed()
      .setTitle("**UPDATE GUILD OWNER**")
      .setThumbnail(oldMember.guild.iconURL())
      .setColor("#00BFFF")
      .setDescription(`${oldMember} Has Been transfered server to ${newMember}`
      )
      .setTimestamp()
      .setFooter(oldMember.guild.name, oldMember.guild.iconURL());
  client.channels.cache.get(logChannel).send(newOwner);
  }
});

client.on("voiceStateUpdate", async (voiceOld, voiceNew) => {
  const { Database } = require("quickmongo");const db = new Database("mongodb://ukeuc9uvjxfjhkonvmis:yYzBZ43o9CmtRDuemg9h@bgfweiijeayygum-mongodb.services.clever-cloud.com:27017/bgfweiijeayygum");
  if (!voiceOld.guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!voiceOld.guild.member(client.user).hasPermission("VIEW_AUDIT_LOG"))
    return;
  
      let logChannel = await db.get(`logchannel_${voiceOld.guild.id}`)
  if (!logChannel) return;
  voiceOld.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userTag = logs.entries.first().executor.tag;
    var userAvatar = logs.entries.first().executor.avatarURL();

    if (voiceOld.serverMute === false && voiceNew.serverMute === true) {
      let serverMutev = new Discord.MessageEmbed()
        .setColor("#00BFFF")
        .setDescription(`Voice state of <@${voiceOld.id}> has been updated.`).addField("🎙 Server Mute", "True")
        .setTimestamp()
        .setFooter(voiceOld.guild.name, voiceOld.guild.iconURL({dynamic:true}));
  client.channels.cache.get(logChannel).send(serverMutev);
    }
    if (voiceOld.serverMute === true && voiceNew.serverMute === false) {
      let serverUnmutev = new Discord.MessageEmbed()
        .setColor("#00BFFF")
        .setDescription(`Voice state of <@${voiceOld.id}> has been updated.`).addField("🎙 Server Mute", "False")
        .setTimestamp()
        .setFooter(voiceOld.guild.name, voiceOld.guild.iconURL({dynamic:true}));
  client.channels.cache.get(logChannel).send(serverUnmutev);
    }
    if (voiceOld.serverDeaf === false && voiceNew.serverDeaf === true) {
        
      let serverDeafv = new Discord.MessageEmbed()

        .setColor("#00BFFF")

        .setDescription(`Voice state of <@${voiceOld.id}> has been updated.`).addField("🔈 Server Deafean", "True")

        .setTimestamp()

        .setFooter(voiceOld.guild.name, voiceOld.guild.iconURL({dynamic:true}));

  client.channels.cache.get(logChannel).send(serverDeafv);
    }
    if (voiceOld.serverDeaf === true && voiceNew.serverDeaf === false) {
        
      let serverUndeafv = new Discord.MessageEmbed()
        .setColor("#00BFFF")
        .setDescription(`Voice state of <@${voiceOld.id}> has been updated.`).addField("🔈 Server Deafean", "False")
        .setTimestamp()
        .setFooter(voiceOld.guild.name, voiceOld.guild.iconURL({dynamic:true}));
  client.channels.cache.get(logChannel).send(serverUndeafv);
    }
  });
});
const id = ["697517724649390151","355418037106638860","695712816316940347"]
client.on('message', async message => {
     const { Database } = require("quickmongo");const db = new Database("mongodb://ukeuc9uvjxfjhkonvmis:yYzBZ43o9CmtRDuemg9h@bgfweiijeayygum-mongodb.services.clever-cloud.com:27017/bgfweiijeayygum");

 var prefix = await db.fetch(`newprefix_${message.guild.id}`)
    if (prefix == null) prefix = '.'
    if(message.author.bot) return undefined;
    let args = message.content.split(" ");//Dmar
        let user = message.mentions.users.first() || message.guild.members.cache.get(args[0]);//Dmar
    if(args[0].toLowerCase() == prefix + 'blacklist'){
      let embed = new Discord.MessageEmbed()
      .setTitle("Error")
      .setDescription("This Command For The Developers Bot")
if(!id.includes(message.author.id)) return message.channel.send(embed)
        let Blacklist = await db.fetch(`Blacklist_${user}`);
if(!id.includes(message.author.id)) return message.channel.send(embed)
        if(Blacklist === null) Blacklist = 'off';//Dmar
        let embed2 = new Discord.MessageEmbed()
        .setTitle("Error")
        .setDescription(`> Usage: ${prefix}blacklist Mention User Or ID `)
    if(!user) return message.channel.send(embed2)
    let embed1 = new Discord.MessageEmbed()
    .setTitle("Done!")
    .setDescription(`Done Added ${user} To Blacklist`)
    message.channel.send(embed1);//Dmar
  await  db.set(`Blacklist_${user.id}`, "on");//Dmar
    }//Dmar
});//Dmar

client.on('message', async message => {
     const { Database } = require("quickmongo");const db = new Database("mongodb://ukeuc9uvjxfjhkonvmis:yYzBZ43o9CmtRDuemg9h@bgfweiijeayygum-mongodb.services.clever-cloud.com:27017/bgfweiijeayygum");
    var prefix = await db.fetch(`newprefix_${message.guild.id}`) 
    if (prefix == null) prefix = '.'
    if(message.author.bot) return undefined;
    let args = message.content.split(" "); 
    if(args[0].toLowerCase() == prefix + 'unblacklist'){
            let embed = new Discord.MessageEmbed()
      .setTitle("Error")
      .setDescription("This Command For The Developers Bot")
if(!id.includes(message.author.id)) return message.channel.send(embed)
        let user = message.mentions.users.first() || message.guild.members.cache.get(args[0]);//Dmar
if(!id.includes(message.author.id)) return message.channel.send(embed)
       let Blacklist = await db.fetch(`Blacklist_${user}`);//Dmar
        if(Blacklist === null) Blacklist = 'off';//Dmar
                let embed2 = new Discord.MessageEmbed()
        .setTitle("Error")
        .setDescription(`> Usage: ${prefix}blacklist Mention User Or ID `)
    if(!user) return message.channel.send(embed2)
    let em = new Discord.MessageEmbed()
    .setTitle("Done!")
    .setDescription(`Done Removed ${user} From Blacklist \`unBlackListed\``)
    message.channel.send(em);//Dmar
    await db.set(`Blacklist_${user.id}`, "off");//Dmar
       
    }//Dmar
});//Dmar let Blacklist = await
client.login("NzM1ODc4NTgyODc4MDc3MDY5.XxmqVg.y2yO4mYxtPn-SjwLTUqPWjsBQ7s")

