const { MessageEmbed } = require(`discord.js`);
const fetch = require("node-fetch");

module.exports.run = async (client, message, args) => {



  const user = message.mentions.users.first();
  if (!user) return message.channel.send('met wie wil je trouwen?')
  if (user.bot === true) return message.channel.send('dat is een bot..')
  if (user === message.author || message.author.id === user.id) return message.channel.send('je kan niet met jezelf trouwen...')

  let proposerID = message.author.id
  let proposerName = message.author.username
  
  client.life.ensure(user.id, {
    member: user.id,
    spouse: 0,
  })
  
  client.life.ensure(message.author.id, {
    member: message.author.id,
    spouse: 0,
  })

  const spouse = client.life.get(message.author.id, 'spouse')
  const uSpouse = client.life.get(user.id, 'spouse')

  if (spouse !== 0) return message.channel.send('je bent al getrouwd...?')
  if (uSpouse !== 0) return message.channel.send(`<@${user.id}> is al getrouwd!`)

  let embed = new MessageEmbed()
    .setDescription(`**<@${user.id}>**, **<@${message.author.id}>** wilt met je trouwen, wil je dat?`)
  
  message.channel.send(embed).then(message => {
    message.react('✅').then(() => message.react("⛔"));

    const filter = (reaction, sent) => {
      return ['✅', '⛔'] && sent.id === user.id;
    }

    (async () => {
	const proposer = await message.guild.members.fetch(proposerID)
   })
  
    message.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
      .then(collected => {
        const reaction = collected.first()

        if (reaction.emoji.name === '✅') {
          client.life.set(proposerID, user.id, 'spouse')
          client.life.set(user.id, proposerID, 'spouse')

          embed.setDescription(`<@${user.id}> en <@${proposerID}> zijn officieel getrouwd!`)
            .setImage("https://i.gifer.com/A0VY.gif")
            .setColor("RANDOM")
          message.channel.send(embed)
        }
        if (reaction.emoji.name === '⛔') { // No emoji
          embed.setDescription(`**<@${proposerID}>**, **<@${user.id}>** wilt niet met je trouwen.`)
      message.edit(embed)
        }
      })
      .catch(collected => {
        message.channel.send(`<@${user.id}>, heeft niet gereageerd, probeer later opnieuw.`)
    });
  })
}

module.exports.help = {
    name: "marry",
    description: "marry",
    aliases: ["trouw"]
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