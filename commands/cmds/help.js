const { MessageEmbed } = require("discord.js");

module.exports.run = (client, message, args) => {
          
    const helpEmbed = new MessageEmbed()
    .setColor('#RANDOM')
    .addFields(
        { name: 'Trophy Moderation', value: '_**blacklist**_, _**eval**_, _**nuke**_, _**lockdown**_, _**nickname**_, _**shutdown**_', inline: true },
        { name: 'Trophy Funny', value: '_**hond**_, _**kat**_, _**hug**_, _**tem**_, _**sla**_, _**penis**_, _**urban**_, _**8ball**_, __**spank**_', inline: true },
        { name: 'Trophy Utility', value: '_**instagram**_, _**snipe**_, _**say**_, _**info**_, _**poll**_, _**avatar**_, _**btc**_', inline: true },
    )
    
    message.channel.send(helpEmbed)

}

module.exports.help = {
  name: "help",
  description: "commands"
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