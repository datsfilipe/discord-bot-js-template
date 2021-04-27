module.exports = {
  "name": "ping",
  "cooldown": 10,
  "description": "the command show the actual ping",
  async execute(message) {
    message
    .reply(`the actual ping is ${Math.round(message.client.ws.ping)}`)
    .catch(console.error);
  },
};