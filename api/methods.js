// -------------------------------
// github.com/nero-nodes/panel-bot
// client/methods.js
//
// Copyright (c) neronodes.net
// Licensed under the MIT license.
// -------------------------------

// Import the ApiRequest constructor.
const ApiRequest = require('./request');

// Create a function for getting servers via the Panel API.
exports.getServers = (host, key) => {
	const req = new ApiRequest(host, key);
	return req.executeGet('APPLICATION_GET_ALL_SERVERS');
};
