module.exports = async (bot) => {
  // message login from bot
  console.log(`the api is logged in as ${bot.user.username}`);
  // randomly getting status bot from file
  let activities = [];
  activities = require("../config/status.json"); // loading activities
  const random_index = Math.floor( Math.random() * activities.length );
  const status = activities[random_index];
  // setting status bot
  await bot.user.setActivity(status);
};