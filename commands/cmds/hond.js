const { MessageEmbed } = require(`discord.js`);
const fetch = require("node-fetch");

module.exports.run = async (client, message, args) => {

      const data = await (await fetch('https://nekos.life/api/v2/img/woof')).json();
      if (!(data || data.url)) return message.sendError('NO_DATA');
      message.channel.send({
          embed: new MessageEmbed()
          .setDescription('')
          .setColor("RANDOM")
          .setImage(data.url)


    })};

module.exports.help = {
    name: "hond",
    description: "hond"
  }
  
  module.exports.requirements = {
    userPerms: [],
    ownerOnly: false,
    roleOnly: false
  }
  
  module.exports.limits = {
    rateLimit: 3,
    cooldown: 60000
  }