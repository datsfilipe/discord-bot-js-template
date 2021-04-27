// processing command
module.exports.run = async (bot, message, params)=> {
  // passing info log for console
  console.log(`the user ${message.author.username} is running command ping.js`);
  message.channel.send("Getting . . .").then ( m => {
    m.edit(`the actual ping is ${Date.now() - m.createdTimestamp}`)
  }).catch(console.error);
};
// exporting config for help.js
module.exports.config = {
  "name": "ping",
  "cooldown": 10,
  "description": "the command show the actual ping",
};