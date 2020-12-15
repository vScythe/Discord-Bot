const { MessageEmbed } = require("discord.js");

module.exports.run = async (client, message, args) => {

if (!args[0]) return message.channel.send('Example: !poll question');
    
// Create Embed
const embed = new MessageEmbed()
    .setColor("RANDOM") //To change color do .setcolor("#fffff")
    .setTitle('Poll:')
    .setDescription(args.join(' '))
    .setFooter(`Poll gemaakt door: ${message.author.username}`);
    
let msg = await message.channel.send(embed)
    .then(function (msg) {
        msg.react("👍");
        msg.react("👎"); // You can only add two reacts
        message.delete({timeout: 1000});
        }).catch(function(error) {
        console.log(error);
    });
};

module.exports.help = {
  name: "poll",
  description: "maak een poll",
}

module.exports.requirements = {
  userPerms: ["MANAGE_MESSAGES"],
  ownerOnly: false,
  roleOnly: true
}

module.exports.limits = {
  rateLimit: 3,
  cooldown: 60000
}