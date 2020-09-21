const Discord = require("discord.js")
const { Database } = require("quickmongo");
const moment = require("moment")
const db = new Database("mongodb://ukeuc9uvjxfjhkonvmis:yYzBZ43o9CmtRDuemg9h@bgfweiijeayygum-mongodb.services.clever-cloud.com:27017/bgfweiijeayygum"); 
exports.run = async (client, message, args) => {
		const member = message.mentions.users.first() || message.guild.members.cache.get(args[0]) || message.author 
      if (member.presence.status == "online") {
        var hello = "Online";
      } else {
        if (member.presence.status == "online") {
          var hello = "Online";
        } else {
          if (member.presence.status == "dnd") {
            var hello = "Do Not Disturb";
          } else {
            if (member.presence.status == "idle") {
              var hello = "Idle";
            } else {
              if (member.presence.status == "offline") {
                var hello = "Invisible";
              }
            }
          }
        }
      }
        const userFlags = member.flags.toArray();
      
  let rep = await db.get(`REPs_${member.id}`)
  if(rep === null) rep = 0;
  let bal = await db.get(`ggff_${member.id}`)
  if(bal === null) bal = 0;
	const flags = {
	DISCORD_EMPLOYEE: '<:DISCORD_EMPLOYEE:755040433163206656>',
	DISCORD_PARTNER: '<:DISCORD_PARTNER:755040434971082849>',
	BUGHUNTER_LEVEL_1: '<:BUG_HUNTER_LEVEL1:755040415794593832>',
	BUGHUNTER_LEVEL_2: '<:BUG_HUNTER_LEVEL2:755040419577987172>',
	HYPESQUAD_EVENTS: '<:HYPE_SQUADEVENTS:755040404709048461>',
	HOUSE_BRAVERY: '<:82781:755040411575386252>',
	HOUSE_BRILLIANCE: '<:45960:755040407108452352>',
	HOUSE_BALANCE: '<:HOUSEOFBALANCE:755040413655498772>',
	EARLY_SUPPORTER: '<:EARLY_SUPPORTER:755040436606992524>',
	TEAM_USER: 'Team User',
	SYSTEM: 'System',
	VERIFIED_BOT: 'Verified Bot',
	VERIFIED_DEVELOPER: '<:VERIFED_DEVELEPOR:755040401135763457>'
};
      var presence;
  if (member.presence.activities[0])
    if (member.presence.activities[0].type == "PLAYING")presence = `Playing ${member.presence.activities[0].name}`;
    else if (member.presence.activities[0].type == "STREAMING")presence = `Streaming ${member.presence.activities[0].name}`;
    else if (member.presence.activities[0].type == "CUSTOM_STATUS")presence = `${member.presence.activities[0].state}`;
    else presence = "Nothing";
  if(presence === null) presence = "Nothing"
    let status;
    if (member.presence.activities.length === 1) status = member.presence.activities[0];
    else if (member.presence.activities.length > 1) status = member.presence.activities[1];

    if (member.presence.activities.length === 0 || status.name !== "Spotify" && status.type !== "LISTENING") {
        return message.channel.send(new Discord.MessageEmbed()
.setColor("#00BFFF")
.setThumbnail(member.avatarURL({dynamic:true}))
.addField('Username:', ` ${member.username} \`(${member.id})\`                              `)
.addField ('About:',`
Account Created At: \`${moment(member.createdTimestamp).format("YYYY/M/D HH:mm:ss")} | ${moment(member.createdTimestamp).fromNow()}\`
Joined Server At: \`${message.member.joinedAt.toString()}\`
Avatar: \`${member.avatarURL() ? "Yes" : "No" }\`
Bot: \`${member.bot || "No" || "Yes"}\`
Badges: ${userFlags.length ? userFlags.map(flag => flags[flag]).join(' | ') : '`None`'}
Nitro: ${member.avatarURL({dynamic:true}) ? "<:NitroBadge:755736350891704320>" : "`No`" }
Spotify: \`Not Listening To Spotify\``,true)
   .addField('Status:',`
User Status: \`${presence}\`
Status: \`${hello}\`
`,true)
.addField('Economy',` 
Reputation: \`${rep}\`
Coins: \`${bal}\`
`,true)
  .setFooter(`Requested By ${message.author.tag}`, message.author.avatarURL())
        .setTimestamp())
    }

    if (status !== null && status.type === "LISTENING" && status.name === "Spotify" && status.assets !== null) {
        let image = `https://i.scdn.co/image/${status.assets.largeImage.slice(8)}`,
            url = `https:/open.spotify.com/track/${status.syncID}`,
            name = status.details,
            artist = status.state,
            album = status.assets.largeText,
            timeStart = status.timestamps.start,
            timeEnd = status.timestamps.end
    let lvlEmbed = new Discord.MessageEmbed()
.setColor("#00BFFF")
.setThumbnail(member.avatarURL({dynamic:true}))
.addField('Username:', ` ${member.username} \`(${member.id})\`                              `)
.addField ('About:',`
Account Created At: \`${moment(member.createdTimestamp).format("YYYY/M/D HH:mm:ss")} | ${moment(member.createdTimestamp).fromNow()}\`
Joined Server At: \`${message.member.joinedAt.toString()}\`
Avatar: \`${member.avatarURL() ? "Yes" : "No" }\`
Bot: \`${member.bot || "No" || "Yes"}\`
Badges: ${userFlags.length ? userFlags.map(flag => flags[flag]).join(' | ') : '`None`'}
Nitro: ${member.avatarURL({dynamic:true}) ? "<:NitroBadge:755736350891704320>" : "`No`" }
Spotify: \`Artist: ${artist} | Song: ${name} | Album: ${album}\`
`,true)
   .addField('Status:',`
User Status: \`${presence}\`
Status: \`${hello}\`
`,true)
.addField('Economy',` 
Reputation: \`${rep}\`
Coins: \`${bal}\`
`,true)
  .setFooter(`Requested By ${message.author.tag}`, message.author.avatarURL())
        .setTimestamp(); 
message.channel.send(lvlEmbed)
  
}

}