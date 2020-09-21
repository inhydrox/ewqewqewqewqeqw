//engilsh
const db = require("quick.db")

  let config = require(`../confiig.js`);
let e = config.emojis;
let prefix =  "g"
module.exports =  { 
    start: {
        perms: `You do not have permission \`MANAGE_MESSAGES\``,
        duration: `Type a valid \`time\` \nExample: \`1d (1= 1day)\`, \`1h (1= 1hour)\`, \`1m (1= 1minute)\`, \`1s (1= 1seconds)\``,
        argswinners: `Type the \`number of winners\`\nExample: \`1 (1= 1Winner)\``,
        prize: `Type the \`prize\` \nExample: \`Nitro\`, \`Credits\`,\`XBox Account\``,
  
        giveaway: `:tada: :tada: **GIVEAWAY START** :tada: :tada:`,
        giveawayEnded: `:tada: :tada: **GIVEAWAY ENDED** :tada: :tada:`,
  
        timeRemaining: `Time remaining: **{duration}**!`, 
        inviteToParticipate: (message) => `React With :tada: to enter!`,
        winMessage: (message) => `${config.reaction} Congratulations, {winners}! You Won: **{prize}**!`,
        embedFooter: `**GIVEAWAY**`,
        noWinner: `Giveaway cancelled, not enough participants `,
        hostedBy: `Hosted By : {user}`,
        winners: `Winner(s)`,
        endedAt: `Ends At`,
      },
    
      units: {
        seconds: `second(s)`,
        minutes: `minute(s)`,
        hours: `hour(s)`,
        days: `day(s)`,
      },
  
      end: {
        perms: ` :x: You do not have permission \`MANAGE_MESSAGES\``,
        msg: ` ❌ You have to specify a valid message ID!`,
        err: ` ❌ Unable to recognize this id giveaway`,
        errmod: ` ❌ This giveaway already ended or deleted!`,
        good: `:tada: The giveaway will be finished in less than:`
      },
  
      reroll: {
        perms: ` :x: You do not have permission \`MANAGE_MESSAGES\``,
        msg: `${e.error} You have to specify a valid message ID!`,
        err: `${e.error} Unable to recognize this id giveaway:`,
        good: `:tada: New winner(s): {winners}! Congratulations!`,
        parts: `${e.error} There weren't enough participants for this giveaway i can't choose!`
      },
  
      edit: {
        perms: ` :x: You do not have permission \`MANAGE_MESSAGES\``,
        msg: `${e.error} You have to specify a valid message ID!`,
        argswinners: `${e.error} type the \`number of winners!\`\nExample: \`${prefix}start 1h 2 Nitro\``,
        prize:  `${e.error} add the \`prize\` please!\nExample: ${prefix}start 1h 2 \`Nitro\``,
        err: `${e.error} Unable to recognize this id giveaway:`,
        good: `${e.success} The giveaway will be modified using the new parameters. The changes will take effect within 5 seconds!`,
        errmod: `${e.error} An error occurred, maybe this giveaway is already finished or deleted`
      },
  
      help:{
    title: `ManageGift's Information:`,
    disc: `This bot is made using [discord.js](https://discord.js.org/#/).
Thanks to all my friends for inspiring me for making this bot!

The people who invited Rusty <3`,//':tada: Hello! I\'m `RustyBot` I help to make giveaways quick and easy!',//'It is an open source bot that allows you to create giveaway with ease and gives you many distinct features. The bot is Programmed in `javascript language` and By: ! -  HaDi KouBeIssI | 🇱🇧#4001',
    cm: `RustyBot Commands:`,
    cmd: `\`${prefix}start\` | to create giveaway.\n\`${prefix}end\` | to end giveaway start.\n\`${prefix}edit\` | to edit giveaway.\n\`${prefix}reroll\` | to Choose a new winner.`,//\n **${e.featured}__Featured commands:__**\n**${prefix}setlang ${e.right} To change the languag of bot.**\n**${prefix}set logs ${e.right} For setup the room of logs.**\n**${prefix}set mention on ${e.right} To active the mention on all start giveaway.**\n**${prefix}set mention off ${e.right} To disabel the mention on all start giveaway.**`,
    cmm: `Info Commands:`,
    cmdd: `\`${prefix}help\` | display commands and info of bot list.\n\`${prefix}ping\` | display bot latency.\n\`${prefix}invite\` | display main links (invite and support) of bot. `,
    stats: `Stats:`,
    stat: `\`Servers:\``,
    set: `\`Users:\``,
    chn: `\`Channels:\``,
    moreinfo: `More Information:`,
    comd: `\`Total Commands:\``,
    giv: `\`All Giveaways:\``,
    ver: `\`Rusty Version:\``
        
      },

    prefixerror: `${e.error} Type a valid prefix!.`,
    setprefix: `${e.success} The prefix on this server has been changed to `,  
    
    info:{
        ping: `M `,
    }
}