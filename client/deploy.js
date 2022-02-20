// -------------------------------
// github.com/nero-nodes/panel-bot
// client/deploy.js
//
// Copyright (c) neronodes.net
// Licensed under the MIT license.
// -------------------------------


const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { clientId, guildId, token } = require('../config/discord.json');

const commands = [
	new SlashCommandBuilder().setName('servers').setDescription('Get all available servers on the Panel.'),
]
	.map(command => command.toJSON());

const rest = new REST({ version: '9' }).setToken(token);

rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
	.then(() => console.log('Successfully registered application commands.'))
	.catch(console.error);
