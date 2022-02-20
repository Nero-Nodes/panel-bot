// -------------------------------
// github.com/nero-nodes/panel-bot
// client/methods.js
//
// Copyright (c) neronodes.net
// Licensed under the MIT license.
// -------------------------------

const ApiRequest = require('./request');
const ApplicationRequest = require('./application');

exports.getServers = (host, key) => {
	const req = new ApiRequest(host, key);
	return req.executeGet(ApplicationRequest.GET_ALL_SERVERS);
};