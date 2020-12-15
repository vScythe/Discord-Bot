const { MessageEmbed } = require(`discord.js`);
const fetch = require("node-fetch");

module.exports.run = async (client, message, args) => {

    let replies = [
        `gooi antwoorden in deze regex`,
        `antwoord 1`,
        `antwoord 2`,
        `antwoord 3`,
        `etc, etc, etc..`
      ];
  
    let result = Math.floor(Math.random() * replies.length);
    const user = message.mentions.users.last() || await client.users.fetch(args[0]).catch(() => null);
    if (!user) return message.reply(" who is a bitchboy?");
    const amssg = message.author;

        message.channel.send(`${replies[result]} <@${user.id}>`)
        message.delete();

    };

module.exports.help = {
    name: "diss",
    description: "diss a person",
  }
  
  module.exports.requirements = {
    userPerms: [],
    ownerOnly: true,
    roleOnly: false
  }
  
  module.exports.limits = {
    rateLimit: 3,
    cooldown: 60000
  }
