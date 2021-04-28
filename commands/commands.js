const Discord = require("discord.js");

module.exports.run = async (bot, message) => {
  let commands = bot.commands;

  const embed = new Discord.MessageEmbed()
    .setColor('#645fce')
    .setTitle(`${process.env.NAME} COMMANDS`)
    .setDescription('This bot is so fucking cool')
    .setTimestamp()
    .setFooter("that's all, hope you like the bot");

  commands.forEach(command => {
    embed.addField(
      `**${process.env.PREFIX}${command.config.name}**`,
      `${command.config.description}`,
      `${true}`
    );
  });

  message.channel.send(embed);
};
module.exports.config = {
  "name": "commands",
  "category": "information",
  "description": "this command show the commands list",
};