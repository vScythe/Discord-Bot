const { MessageEmbed } = require("discord.js");


module.exports.run = async (client, message, args) => {

const member = message.mentions.users.last() || await client.users.fetch(args[0]).catch(() => null);
let user = ''
if (member) user = message.mentions.members.last().user
if (!member) user = message.author


return message.channel.send(new MessageEmbed()
.setImage(user.displayAvatarURL({size: 2048, dynamic: true,  format:"png"}))
.setDescription(`${user.tag}`)


)};


module.exports.help = {
    name: "avatar",
    description: "view tagged user avatar"
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