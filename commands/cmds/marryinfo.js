const { MessageEmbed } = require("discord.js");

module.exports.run = async (client, message, args) => {
    try {
    const member = message.mentions.members.first();
    let user = ''
    if (member) user = message.mentions.members.first().user
    if (user.bot === true) return message.channel.send('waarom een bot?')
    if (!member) user = message.author
    
    client.life.ensure(user.id, {
      member: user.id,
      spouse: 0,
    })
    
    const married = client.life.get(user.id, 'spouse') === 0 ? 'niemand' : `<@${client.life.get(user.id, 'spouse')}>`

    let embed = new MessageEmbed()
      .setFooter(`${user.tag}`)
      .addField(`Getrouwd met:`, married, true)
      .setThumbnail(user.avatarURL)
      .setColor("#RANDOM")

    message.channel.send(embed)
  } catch (err) {
    message.channel.send('Fout:\n' + err).catch()
  }
}

module.exports.help = {
  name: "marryinfo",
  description: "marriage info",
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