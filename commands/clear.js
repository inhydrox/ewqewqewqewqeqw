
const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  let embed = new Discord.MessageEmbed()
.setColor("#00EFFF").setTitle("Error")
.setDescription("You Must Have Permission Manage Message")
  if (!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES"))
return message.channel.send(embed);
  let embed1 = new Discord.MessageEmbed()
.setColor("#00EFFF")
.setTitle("Error")
.setDescription("I Must Have Permission Manage Message")
if (!message.guild.member(message.client.user).hasPermission("MANAGE_MESSAGES"))
return message.channel.send(embed1);
  let embed22 = new Discord.MessageEmbed().setColor("BLACK").setDescription("Please Type a number between 2 - 100 for clear messsages")
if(!args.length) return message.channel.send(embed22)
  try {
    let num;

    if (!isNaN(args[0])) {
      num = parseInt(args[0]);

      if (num <= 100 && num > 1) {
        message.channel.messages
          .fetch({
            limit: num
          })
          .then(messages => {
            message.channel
              .bulkDelete(messages)

            message.channel
              .send(
                new Discord.MessageEmbed()
                  .setDescription(
                    `Done, \`${messages.size}\` messages have been deleted.`
                  )
.setColor("#00EFFF")
              )
              .then(m => m.delete({ timeout: 1000 }));
          });

        message.delete().catch(O_o => {});
      } else
        message.channel
          .send(
            new Discord.MessageEmbed()
              .setDescription(
                "You must enter a number between 2 and 100 for let me to clear!"
              )
.setColor("#00EFFF")
              .setTitle("Error!")
          )
          .then(m => m.delete({ timeout: 12000 }));
    }
  } catch (err) {
    message.channel.send("There was an error!\n" + err).catch();
  }
}
                               
