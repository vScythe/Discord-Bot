const { owners, prefix } = require("../config");
const { MessageEmbed } = require(`discord.js`);

module.exports = async (client, message) => {
  
if (!message.guild || message.author.bot) return;
  

  const escapeRegex = str => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
	const prefixRegex = new RegExp(`^(<@!?${client.user.id}>|${escapeRegex(prefix)})\\s*`);
	if (!prefixRegex.test(message.content)) return;
	const [, matchedPrefix] = message.content.match(prefixRegex);
	const args = message.content.slice(matchedPrefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();
  const cmd = client.commands.get(command) || client.aliases.get(command);
    

  if (!cmd) return;
  if (message.guild && !message.guild.me.permissions.has(["SEND_MESSAGES"])) return;

  if (cmd.requirements.devOnly && !owners.includes(message.author.id))
    return message.channel.send(`je hebt niet genoeg permissies om deze commando uit te kunnen voeren!`)

    if (cmd.requirements.onlyRole && !message.member.roles.cache.some(role => role.name === 'X')) 
	    
	    
	    // maak een role genaamd "X" en geef het aan jezelf en je kunt elke command uitvoeren waar `roleonly` op `true` staat.
	    // je kan ook `(role => role.name === 'X'))` naar `(role => role.id === 'ROLE ID'))` veranderen, en `ROLE ID` het specifieke role id neer zetten
	    // waardoor andere moderators met role permissies niet een "X" role kunnen maken en het role aan hun geven en `roleOnly` kunnen abusen.
	    
	    // roleOnly is gebruikt voor de mensen die het bot kunnen aansturen wat mensen met ADMINISTRATOR permissies als voorbeeld niet kunnen doen.
	    // ex: je hebt iemand als staff en hij mag geen ADMINISTRATOR permissies maar je wilt wel dat hij een commando kan uitvoeren die een andere ADMINISTATOR niet kan, kan dit in toeval zijn.
	    // roleOnly is niet voor Developer bedoelt, als je wilt dat alleen jij (de developer) het specifiek command alleen kan gebruiken zet ownerOnly op true en roleOnly op false.
	 	    
	    
    return message.reply(`je hebt niet genoeg permissies om deze commando uit te kunnen voeren!`)
  
  if (cmd.requirements.userPerms && !message.member.permissions.has(cmd.requirements.userPerms))
  return message.reply(`je hebt niet genoeg permissies om deze commando uit te kunnen voeren!`);


  if (cmd.limits) {
    const current = client.limits.get(`${command}-${message.author.id}`);
    if (!current) client.limits.set(`${command}-${message.author.id}`, 1);
    else {
      if (current >= cmd.limits.rateLimit) return message.channel.send(
        new MessageEmbed({
          color: `random`,
          description: `Cooldown: ${client.ms(
            client.timeouts.get(`${command}-${message.author.id}`) - Date.now(), 
            { long: true }
          )}`,
        })
      );
      client.limits.set(`${command}-${message.author.id}`, current + 1);
    }

    cmd.run(client, message, args);
    client.timeouts.set(`${command}-${message.author.id}`, Date.now() + cmd.limits.cooldown);
    setTimeout(() => {
      client.timeouts.delete(`${command}-${message.author.id}`)
      client.limits.delete(`${command}-${message.author.id}`)
     }, cmd.limits.cooldown)
    } else return cmd.run(client, message, args)
  }

const missingPerms = (member, perms) => {
  const missingPerms = member.permissions.missing(perms)
    .map(str => `\`${str.replace(/_/g, ' ').toLowerCase().replace(/\b(\w)/g, char => char.toUpperCase())}\``);
    missingPerms[0];
};
