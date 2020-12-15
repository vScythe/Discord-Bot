const { readdirSync } = require("fs");
const ascii = require('ascii-table');

let table = new ascii("Commands");
table.setHeading('Commands', 'Load status');

module.exports.run = (client) => {
  readdirSync("./commands/").forEach(dir => {
    const commands = readdirSync(`./commands/${dir}/`).filter(file => file.endsWith('.js'));
    for(let file of commands) {
        let props = require(`../commands/${dir}/${file}`);
        if(props.help.name) {
            client.commands.set(props.help.name, props);
            table.addRow(file, '✅')
        } else {
            table.addRow(file, '❌')
            continue;
        } if(props.help.aliases && Array.isArray(props.help.aliases)) props.help.aliases.forEach(alias => client.aliases.set(alias, props));


    }
})
console.log(table.toString());
console.log(`Loaded ${client.commands.size} commands!`);
}