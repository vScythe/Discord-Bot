const { MessageEmbed } = require("discord.js");


module.exports.run = async (client, message, args) => {

  const member = message.mentions.users.first() || await client.users.fetch(args[0]).catch(() => null);
  let user = ''
  if (member) user = message.mentions.members.first().user
  if (!member) user = message.author
    

      let replies = [
        "8========================================D",
        "8D",
        "8=D",
        "8==D",
        "8===D",
        "8====D",
        "8=====D",
        "8======D",
        "8=======D",
        "8========D",
        "8==========D",
        "8===========D",
        "8============D",
        "8==============D",
        "8===============D",
        "8================D",
        "8=================D",
        "8==================D",
        "8===================D",
        "8====================D",
        "8=====================D",
        "8======================D",
        "8=======================D",
      ];

      let result = Math.floor(Math.random() * replies.length);
      let question = args.slice(0).join(" ");

        const embed = new MessageEmbed()
        .setColor("#RANDOM")
        .addField("Lul Grootte:", replies[result])
        .setFooter(`${user.tag}`);

      message.channel.send(embed);
  
}

module.exports.help = {
  name: "penis",
  description: "return",
  aliases: ["yarrak", "pp", 'lul']
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