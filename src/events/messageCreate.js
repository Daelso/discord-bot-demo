const { Events } = require("discord.js");

module.exports = {
  name: Events.MessageCreate,
  once: false,
  execute(message) {
    if (message.content === "duck") {
      message.reply("quack");
    }
  },
};
