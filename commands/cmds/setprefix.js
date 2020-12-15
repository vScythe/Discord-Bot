const { VultrexDB } = require("vultrex.db");
const db = new VultrexDB({
  provider: 'sqlite',
  table: 'prefixTable',
  fileName: 'prefixFile'
});


module.exports.run = async (client, message, args) => {

if (!args[0]) return message.channel.send("je hebt geen nieuwe prefix aangegeven...");
await db.connect();
await db.set(message.guild.id, args[0].toLowerCase());
client.prefix[message.guild.id] = args[0].toLowerCase();
return message.reply(`Nieuwe Prefix: \`${args[0].toLowerCase()}\``);

  }
  module.exports.help = {
    name: "prefix",
    description: "set guild prefix"
  }
  
  module.exports.requirements = {
    userPerms: [],
    clientPerms: [],
    ownerOnly: true
  }
  
  module.exports.limits = {
    rateLimit: 3,
    cooldown: 60000
  }