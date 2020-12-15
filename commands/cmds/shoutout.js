const { MessageEmbed } = require(`discord.js`);

module.exports.run = async (client, message, args) => {


  
    const user = message.mentions.users.first() || await client.users.fetch(args[0]).catch(() => null);

        message.channel.send(`dikke shoutout naar <@${user.id}>`)

    };

module.exports.help = {
    name: "shoutout",
    description: "gooi een s/o",
    aliases: ["so"]
  }
  
  module.exports.requirements = {
    userPerms: [],
    clientPerms: [],
    ownerOnly: false
  }
  
  module.exports.limits = {
    rateLimit: 3,
    cooldown: 60000
  }