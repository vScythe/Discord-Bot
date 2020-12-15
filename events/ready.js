module.exports = (client) => {
  console.log(`${client.user.tag}`);
  client.user.setPresence({ activity: { name: '💮'}, status: 'dnd'}); 
};
