const { MessageEmbed } = require("discord.js");


module.exports.run = async (client, message, args) => {

    let nick = message.content.split(' ').slice(2).join(' ');
    let usermention = message.mentions.members.last();
    if(message.author.bot) return;

    if (!usermention) return message.reply("who needs their name changed?")

    if (!nick) await usermention.setNickname("")
    if (nick) await usermention.setNickname(nick)
    return message.channel.send("name succesfully changed!");

};


module.exports.help = {
    name: "nickname",
    description: "change person's name",
    aliases: ["nick"]
  }
  
  module.exports.requirements = {
    userPerms: [],
    ownerOnly: false,
    roleOnly: true
  }
  
  module.exports.limits = {
    rateLimit: 3,
    cooldown: 60000
  }