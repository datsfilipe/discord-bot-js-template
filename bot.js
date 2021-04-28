const Discord = require("discord.js");
const fs = require("fs");
require("dotenv").config(); // loading .env

const bot = new Discord.Client(); // creating client
bot.commands = new Discord.Collection(); // bot.commands as a Discord.js Collection

// events load
fs.readdir(__dirname + "/events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach((file) => {
    const event = require(__dirname + `/events/${file}`);
    let event_name = file.split(".")[0];
    bot.on(event_name, event.bind(null, bot));
    console.log(`event ${event_name} been loaded now . . .`);
  });
});

// commands load
fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach((file) => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/${file}`);
    let command_name = file.split(".")[0];
    bot.commands.set(command_name, props);
    console.log(`command ${command_name} been loaded now . . .`);
  });
});

bot.login(process.env.TOKEN); // login into discord