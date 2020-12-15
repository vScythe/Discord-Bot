const { MessageEmbed } = require("discord.js");
const ms = require("ms");

module.exports.run = (client, message, args) => {
 
    let role = message.member.hasPermission('MANAGE_CHANNELS')
    if(!message.member.hasPermission('MANAGE_CHANNELS'))
      return message.reply("je hebt geen permissies om dit uit te voeren!");
  
  
  if (!client.lockit) client.lockit = [];
  let time = args.join(' ');
  let validUnlocks = ['release', 'unlock'];
  if (!time) return message.reply('je moet aangeven hoelang je de channel wilt locken.');

  if (validUnlocks.includes(time)) {
    message.channel.updateOverwrite(message.guild.id, {
      SEND_MESSAGES: null
    }).then(() => {
      message.channel.send('Lockdown uitgezet.');
      clearTimeout(client.lockit[message.channel.id]);
      delete client.lockit[message.channel.id];
    }).catch(error => {
      console.log(error);
    });
  } else {
    message.channel.updateOverwrite(message.guild.id, {
      SEND_MESSAGES: false
    }).then(() => {
      message.channel.send(`Channel is gelocked voor: ${ms(ms(time), { long:true })}`).then(() => {

        client.lockit[message.channel.id] = setTimeout(() => {
          message.channel.updateOverwrite(message.guild.id, {
            SEND_MESSAGES: null
          }).then(message.channel.send('Lockdown over.')).catch(console.error);
          delete client.lockit[message.channel.id];
        }, ms(time));

      }).catch(error => {
        console.log(error);
      });
    });
  }
};

module.exports.help = {
  name: "lockdown",
  description: "lockdown een channel",
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