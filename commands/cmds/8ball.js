const { MessageEmbed } = require(`discord.js`);

module.exports.run = async (client, message, args) => {

  if (!args[1]) return message.reply("stel een vraag!");
      let replies = [
        `antwoord etc, etc, etc...`,
        `antwoord etc, etc, etc...`,
        `antwoord etc, etc, etc...`,
        `antwoord etc, etc, etc...`
      ];

      let result = Math.floor(Math.random() * replies.length);
      let question = args.slice(0).join(" ");

        const embed = new MessageEmbed()
        .setColor("#RANDOM")
        .addField(`Vraag:`, question)
        .addField("Antwoord:", replies[result])
        .setFooter(`${message.author.tag}`);

      message.channel.send(embed);
  
  };

  module.exports.help = {
    name: "8ball",
    description: "kat?"
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