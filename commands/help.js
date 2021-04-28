const Discord = require("discord.js");

module.exports.config = {
  "name": "help",
  "category": "information",
  "description": "this command show the help information",
};
module.exports.run = async (bot, message) => {
  const embed = new Discord.MessageEmbed()
    .setColor('#645fce')
    .setTitle(`${process.env.NAME} help`)
    .setDescription('This bot is so fucking cool')
    .addFields(
      { name: 'commands', value: `to see a commands list use the command ${process.env.PREFIX}commands!` },
      { name: 'hope u can enjoy the bot', value: 'vote the on the bot in . . .'}
    )
    .setTimestamp()
    .setFooter("that's all, hope you like the bot");
    
  message.channel.send(embed);
};