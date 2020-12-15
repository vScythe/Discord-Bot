const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

  const user = message.mentions.users.last() || await client.users.fetch(args[1]).catch(() => null);
  if (!user) return message.reply("wie wil je blacklisten?");

    if (client.blacklist.includes(user.id)) {
    client.blacklist.splice(client.blacklist.indexOf(user.id));
    message.channel.send(`**${user.tag}** is verwijderd van de blacklist!`);
    } else {
      client.blacklist.push(user.id);
      message.channel.send(`**${user.tag}** is toegevoegd aan de blacklist!`);
    }
    await client.db.set("blacklist", client.blacklist);

}

module.exports.help = {
    name: "blacklist",
    description: "add or remove blacklisted users"
  }
  
  module.exports.requirements = {
    userPerms: [],
    clientPerms: [],
    ownerOnly: true,
    roleOnly: true
  }
  
module.exports.limits = {
  rateLimit: 3,
  cooldown: 60000
}