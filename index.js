const { token } = require("./config");
const { Client, Collection } = require("discord.js");

const client = new Client({
  disableEveryone: true,
  disabledEvents: ["TYPING_START"],
  partials: ["MESSAGE", "CHANNEL", "REACTION"],
});

client.commands = new Collection();
client.aliases = new Collection();
client.timeouts = new Collection();
client.limits = new Map();

const commands = require("./structures/command");
const events = require("./structures/event");

commands.run(client);
events.run(client);

client.login(token);
