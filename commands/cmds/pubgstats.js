const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");


module.exports.run = async (client, message, args) => {
 
    const user = args.join(" ");
    if (!user) return message.reply("welke PUBG account?")

    message.channel.send(`https://pubg.op.gg/user/${user}`)


};

module.exports.help = {
  name: "pubgstats",
  description: "view pubg stats",
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