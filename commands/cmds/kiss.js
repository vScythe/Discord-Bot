const { MessageEmbed } = require(`discord.js`);
const fetch = require("node-fetch");

module.exports.run = async (client, message, args) => {


    const author = message.author;
    const user = message.mentions.users.last() || await client.users.fetch(args[0]).catch(() => null);
    if (!user) return message.reply("who do you wanna give a kiss?");
      const data = await (await fetch('https://nekos.life/api/v2/img/kiss')).json();
      if (!(data || data.url)) return message.sendError('NO_DATA');
      message.channel.send({
          embed: new MessageEmbed()
          .setTitle(`${author.tag} kust ${user.tag}`)
          .setDescription('')
          .setColor("RANDOM")
          .setImage(data.url)


    })};

module.exports.help = {
    name: "kus",
    description: "kus een persoon",
    aliases: ["kus", "kiss", 'zoen']
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