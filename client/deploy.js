// -------------------------------
// github.com/nero-nodes/panel-bot
// client/deploy.js
//
// Copyright (c) neronodes.net
// Licensed under the MIT license.
// -------------------------------


// Import dependencies for building Slas
// commands on the Discord API.
const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');

// Import our configuration file.
const { clientId, guildId, token } = require('../config/discord.json');

// Declare a Rest client to handle the API put requests.
const rest = new REST({ version: '9' }).setToken(token);

// Create list of commands available.
const commands = [
	// Use SlashCommandBuilder to set a new command.
	new SlashCommandBuilder().setName('servers').setDescription('Get all available servers on the Panel.'),
]
	// Map the comamnd array to JSON.
	.map(command => command.toJSON());

// Create the API object on the Discord API.
rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
	// Log success to console.
	.then(() => console.log('Successfully deployed commands to Discord API.'))
	// if there's an error, catch it and return to console.
	.catch(error => console.error('Unable to deploy commands to Discord API.\n' + error));
