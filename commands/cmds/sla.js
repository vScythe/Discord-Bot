const { MessageEmbed } = require(`discord.js`);

const fetch = require("node-fetch");

module.exports.run = async (client, message, args) => {


    const author = message.author;
    const user = message.mentions.users.first() || await client.users.fetch(args[0]).catch(() => null);
    if (!user) return message.reply("wie wil je slaan?");
      const data = await (await fetch('https://nekos.life/api/v2/img/slap')).json();
      if (!(data || data.url)) return message.sendError('NO_DATA');
      message.channel.send({
          embed: new MessageEmbed()
          .setTitle(`${author.tag} temt ${user.tag}`)
          .setDescription('')
          .setColor("RANDOM")
          .setImage(data.url)


    })};

module.exports.help = {
    name: "sla",
    description: "sla",
    aliases: ["sla", "slap"]
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