const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");


module.exports.run = async (client, message, args) => {

  // returns code so they can't use this command
//   if(message.author.id == 'EXAMPLE-ID'){
//  return message.channel.send("this command has been disabled for you.")
//   }; 


  
    client.life.ensure(message.author.id, {
        member: message.author.id,
        spouse: 0,
        job: 0
      })

      const spouse = client.life.get(message.author.id, 'spouse')
      if (spouse === 0) return message.channel.send('Je moet een partner hebben om te kunnen scheiden!')
      
      if (args[0] === 'confirm') {
        message.channel.send(`<@${message.author.id}> is gescheiden, rip!`)
        client.life.set(message.author.id, 0, 'spouse')
        client.life.set(spouse, 0, 'spouse')
      }
      
      else {
          message.channel.send('Je gaat scheiden met je partner, typ `+divorce confirm` om zeker te weten!')
      }
    };

module.exports.help = {
  name: "divorce",
  description: "divorce",
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