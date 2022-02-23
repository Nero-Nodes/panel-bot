// -------------------------------
// github.com/nero-nodes/panel-bot
// client/index.js
//
// Copyright (c) neronodes.net
// Licensed under the MIT license.
// -------------------------------

// Require the necessary dependencies for this project.
const { Client, Intents } = require('discord.js');
const ApiInstance = require('../api/api');

// Get configurations for Api.
const { key } = require('../config/auth.json');
const { host } = require('../config/panel.json');

// Create an ApiInstance for making requests to the Panel.
const panel = new ApiInstance(host, key);

// Import configurations we'll need.
const { token } = require('../config/discord.json');

// Create a new Discord client instance.
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// Login to Discord with the bot token.
client.login(token);

// When the client is ready, log it to the console.
client.once('ready', () => {
	console.log('success: client connected to API');
	console.log('panel url configured as ' + panel.host);
});

// Create an interaction function to run commands.
client.on('interactionCreate', async interaction => {
	// If there isn't a command, exit.
	if (!interaction.isCommand()) return;

	// Declare a variable for the command name.
	const { commandName } = interaction;

	// If the command is 'servers', make an API request and
	// return the message to Discord's API.
	if (commandName === 'servers') {
		panel.getAllServers().then((response) => {
			// Send the interaction to Discord.
			interaction.reply('looks like there\'s ' + response.meta.pagination.total + ' servers.');
		});
	}
});
