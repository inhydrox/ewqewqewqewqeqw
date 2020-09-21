module.exports = (client, message) => {
var prefix =  ".g"
console.log(`Ready to serve in ${client.channels.cache.size} channels on ${client.guilds.cache.size} servers, for a total of ${client.users.cache.size} users!`);
  client.user.setStatus("dnd")
  client.user.setActivity(`${prefix}help | Serve ${client.guilds.cache.size} Server`);
};