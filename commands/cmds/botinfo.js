const { MessageEmbed } = require("discord.js");
const ms = require('ms');
module.exports.run = (client, message, args) => {
          
    const helpEmbed = new MessageEmbed()
    .setColor('#RANDOM')
    .setFooter(`ALBERT HEIJN Bot Info`)
    .addFields(
        { name: 'DEVELOPER & HOSTER', value: '<@648677172424343572>, <@603160521256075278>', inline: false },
        { name: 'TAAL', value: '`javascript/discord.js@12.2.0`', inline: false },
        { name: 'ONLINE', value: `\`${ms(client.uptime, { long: true })}\``, inline: false },
    )
    .setTimestamp();
    
    message.channel.send(helpEmbed)

}

module.exports.help = {
  name: "botinfo",
  description: "info van de bot"
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