const { MessageEmbed } = require('discord.js');
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const BannedWords = ["admin abuse", "aa", "adminabuse", "admin abooz", "admin aboz", "adin abooz", "admin adbusese", "admin abuser", "admin abusing", "Admin abusing", "Admin abuse", "Admin Abuse", "Adminabuse", "AdminAbuse", "admin Abuse", "adminAbuse", "aa", "Aa", "aA", "adminabuse", "admin abooz", "Admin aboz", "adminabooz", "adin abooz", "admin adbusese", "admin abuser", "AAing", "adminn abooze", "admin abuze", "cunt", "nigger", "nigga", "faggot", "slut", "queer", "tranny", "trannies", "whore", "anal", "anus", "arse", "sex", "raid", "masturbate", "pussy", "penis", "cum", "sperm", "semen", "clitoris", "dick", "dildo", "tits", "slave", "pornhub", "porn", "kys", "fag", "stearn", "cs:go", "fuck", "hentai", "fucker", "cervix", "bitch", "prison smp", "prison rp", "discord.gg", "discord.io", "hurricane chaser chase"]
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


client.once('ready', () => {
    console.log('blob security is online, now listening for retards saying "aDmIn AbOoZeR"');
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	if (interaction.commandName === '??help') {
		await interaction.reply({ embeds: help});
	} else if (interaction.commandName === '??opensource') {
		await interaction.reply({ embeds: opensource });
	}
	// ...
});

client.on("message", message => {
    if (BannedWords.some(word => message.toString().toLowerCase().includes(word))) {message.delete().catch(e => console.error("e")); message.reply({ embeds: [warn] }); message.channel.send('<@&873632222907859004>')};
});
client.login('ODU2OTc5MTUyNTIzODg2NjAy.YNI6Bw.QFc4C89aO4FUpBCL_V-Ue2sfS8Q');
