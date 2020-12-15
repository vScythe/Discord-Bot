const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");

module.exports.run = async (client, message, args) => {


  const { list } = await fetch(`http://api.urbandictionary.com/v0/define?term=${args.join(" ")}`).then(response => response.json());

  if (!args.join(" ")) return message.channel.send({
    embed: {
      color: 0x36393f,
      description: `i don't see any text? what do you wanna know.`
    }
  });

  if (!list.length) {
    return message.channel.send({
      embed: {
        color: 0x36393f,
        description: `No results for **${args.join(' ')}**.`
      }
    });
  }

  const trim = (str, max) => ((str.length > max) ? `${str.slice(0, max - 3)}...` : str);

  const [answer] = list;

  const embed = new MessageEmbed()
    .setColor('0x36393f')
    .setTitle(answer.word)
    .setURL(answer.permalink)
    .addField('Definition', trim(answer.definition, 1024))
    .addField('Preview', trim(answer.example, 1024))
    .setFooter(`👍${answer.thumbs_up} | 👎 ${answer.thumbs_down}`);

  message.channel.send(embed);

}

module.exports.help = {
  name: "urban",
  description: "urban",
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