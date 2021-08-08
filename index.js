const { MessageEmbed } = require('discord.js');
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const BannedWords = [""] // put banned words here like this [word 1], [word 2], [word 3] you dont need a comma at the last one
const warn = new MessageEmbed()
	.setColor('#FF0000')
	.setTitle('Blacklisted Word Detected')
	.setAuthor('BlobSecurity v1')
	.setDescription('A message you sent contained word(s) that were blacklisted. Please do not send blacklisted words in the channel')
	.setTimestamp()

const help = new MessageEmbed()
	.setColor('#FF0000')
	.setTitle('Help Menu')
	.setAuthor('BlobSecurity v1')
	.setDescription('BlobSecurity Bot | What do I do?\nI protect against people sending blacklisted words\nPlease note this is only an alpha version.')
	.setTimestamp()

const opensource = new MessageEmbed()
	.setColor('#FF0000')
	.setTitle('Open Source')
	.setAuthor('BlobSecurity v1')
	.setDescription('All of my code is avaliable on GitHub: https://github.com/chunkbanned/blobsecurity')
	.setTimestamp()


client.once('ready', () => {
    console.log('blob security is online, now listening for retards saying "aDmIn AbOoZeR"');
});

client.on('message', msg => {
	if (msg.content === prefix + 'help') {
		msg.reply({ embeds: [help] })
	}
     if (msg.content === prefix + 'opensource') {
		msg.reply({ embeds: [opensource] })
	}
  
  });

client.on("message", message => {
    if (BannedWords.some(word => message.toString().toLowerCase().includes(word))) {message.delete().catch(e => console.error("e")); message.reply({ embeds: [warn] }); message.channel.send('<@&873632222907859004>')};
});
client.login(''); // put token here
