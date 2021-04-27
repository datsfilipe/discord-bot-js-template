module.exports = async (message, bot) => {
  // verifying if command is from a valid user
  if (message.author.bot) return;
  // MESSAGE.AUTHOR.BOT IS UNDEFINED
  if (!message.content.startsWith(process.env.PREFIX)) return;
  // taking command from message
  let message_command = message.content.split(' ')[0].slice(process.env.PREFIX.length);
  let params = message.content.split(' ').slice(1);
  // verifying if command exists
  if (bot.commands.has(message_command)) {
    command = bot.commands.get(message_command);
  } else {
    return;
  };
  // running command
  command.run(bot, message, params);
};