const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");


module.exports.run = async (client, message, args) => {


 let btcusd = await fetch(`https://blockchain.info/ticker`)
  .then(res => res.json())
  .then(json => json.USD.last);

  let btceur = await fetch(`https://bitonic.nl/api/buy`)
  .then(res => res.json())
  .then(json => json.eur);



    let embed = new MessageEmbed()
    .setColor("#ff9900")
    .setThumbnail("https://cdn4.iconfinder.com/data/icons/crypto-currency-and-coin-2/256/bitoin_btc_coin_crypto-512.png")
    .setTitle("Bitcoin Price")
    .addField(`USD‌`, `$${btcusd}`)
    .addField(`EURO`, `€${btceur}`);


    message.channel.send(embed);
};

module.exports.help = {
  name: "btc",
  description: "Check current bitcoin price!",
  aliases: ["btc, bitcoin"]
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
