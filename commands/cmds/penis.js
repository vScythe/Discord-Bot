const { MessageEmbed } = require("discord.js");


module.exports.run = async (client, message, args) => {

      let replies = [
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
        "8=========================D",
      ];


      let user = message.mentions.users.first() || message.guild.members.cache.find(mem => mem.user.username === args[0]) || message.guild.members.cache.find(mem => mem.user.tag === args[0]) || message.guild.members.cache.get(args[0])
      if (!user) user = message.author
      const avatar = await user.displayAvatarURL();

      let result = Math.floor(Math.random() * replies.length);
      let question = args.slice(0).join(" ");

        const embed = new MessageEmbed()
        .setColor("#RANDOM")
        .setAuthor(user.username + "#" + user.discriminator, avatar)
        .setDescription(replies[result])

      message.channel.send(embed);
  
}

module.exports.help = {
  name: "penis",
  description: "penis size"
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