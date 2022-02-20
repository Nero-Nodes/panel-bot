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

const panel = new ApiInstance(host, key);

// Import configurations we'll need.
const { token } = require('../config/discord.json');

// Create a new Discord client instance.
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// Login to Discord with your client's token
client.login(token);

// When the client is ready, log it to the console.
client.once('ready', () => {
	console.log('success: client connected to API');
	console.log('panel url configured as ' + panel.host);

	panel.getAllServers().then((response) => {
		console.log(response.meta.pagination.total);
	});
});
