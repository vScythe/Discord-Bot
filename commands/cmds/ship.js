const { MessageEmbed } = require("discord.js");


module.exports.run = (client, message, args) => {


  var fortunes = [
    `100% ​██████████ ​Trouw materiaal :couple_with_heart:`,
    `99%  ​█████████ ​ Te goed voor woorden :heart_eyes:`,
    `1%  ​█ ​          Ren weg :sob:`,
    `76%  ​███████ ​   Goeie match :relaxed:`,
    `22%  ​██ ​        Te laag :cry:`,
    `54%  ​█████ ​     Net aan :sweat_smile:`,
    `9%  ​█ ​          Gaat niet samen :mask:`,
    `16%  ​█ ​         Bruh :face_palm:`,
    `66%  ​​██████ ​    Daten maar :relaxed:`,
    `87%  ​████████ ​  DM elkaar NU :heart_eyes_cat:`,
    `6%  ​█ ​          Je weet het zelf al :wave:`

]

let rUser = (args[1]) || (args[1]);
if (!rUser) return message.channel.send({
    embed: {
        color: 0x36393f,
        description: `vermeld 2 gebruikers.`
    }
});


const embed1 = new MessageEmbed()
    .setDescription(fortunes[Math.floor(Math.random() * fortunes.length)])
    .setColor("e75a70")

message.channel.send(`:heartpulse: MATCHMAKING :heartpulse:
:small_red_triangle_down: ${args[0]}
:small_red_triangle: ${args[1]}`, {
        embed: embed1
    });
};

module.exports.help = {
  name: "ship",
  description: "ship",
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