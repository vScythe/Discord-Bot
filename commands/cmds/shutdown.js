const { MessageEmbed } = require(`discord.js`);

module.exports.run = async (client, message, args) => {

let embed = new MessageEmbed()
    .setTitle("Shutting Down...");

    message.channel.send(embed);

    await process.exit()
}


module.exports.help = {
    name: "shutdown",
    description: "shutdown discord bot"
  }
  
  module.exports.requirements = {
    userPerms: [],
    ownerOnly: true,
    roleOnly: false
  }
  
  module.exports.limits = {
    rateLimit: 3,
    cooldown: 60000
  }