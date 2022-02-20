// -------------------------------
// github.com/nero-nodes/panel-bot
// client/index.js
//
// Copyright (c) neronodes.net
// Licensed under the MIT license.
// -------------------------------

// Require the necessary dependencies for this project.
const { Client, Intents } = require('discord.js');

// Import configurations we'll need.
const { token } = require('../config/discord.json');

// Create a new Discord client instance.
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// Login to Discord with your client's token
client.login(token);

// When the client is ready, log it to the console.
client.once('ready', () => {
	console.log('success: client connected to API');
});
