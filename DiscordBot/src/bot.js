require('dotenv').config();



const { Client } = require('discord.js');
const client = new Client();
const PREFIX = "~";

client.on('ready', () =>{
	console.log(`${client.user.tag} has logged in`);
});




client.on('message', (message) => {
	if(message.author.bot) return;

	if(message.content.startsWith(PREFIX)) {
		const [CMD_NAME, ...args] = message.content
		.trim()
		.substring(PREFIX.length)
		.split(/\s+/);


		if(CMD_NAME === 'info') {
			if(args.length === 0) return message.reply('Please provide an Username');

			
			const member = message.guild.members.fetch(args[0]);

			

		console.log(member);
		} 
	}
})






client.login(process.env.DISCORDJS_BOT_TOKEN);
