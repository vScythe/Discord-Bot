const { MessageEmbed } = require("discord.js");


module.exports.run = (client, message, args) => {

  const msg = client.snipes.get(message.channel.id);
  if (!msg) return message.channel.send("er zijn geen nieuwe berichten verwijderd.")
  
  const embed = new MessageEmbed()
    .setAuthor(`Verwijderd Door: ${msg.author.tag}`, msg.author.displayAvatarURL())
    .setDescription(msg.content);
  
  if (msg.image) embed.setImage(msg.image);
  
  message.channel.send(embed)


}

module.exports.help = {
  name: "snipe",
  description: "View a recently deleted message",
  aliases: ["s", "snipe"]
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