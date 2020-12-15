module.exports.run = (client, message, args) => {

let bm = args.join(" ");
message.channel.send(bm);


message.delete();
  }
  
  module.exports.help = {
    name: "say",
    description: "repeat its sentence"
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