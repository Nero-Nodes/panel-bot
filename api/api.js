// -------------------------------
// github.com/nero-nodes/panel-bot
// api/api.js
//
// Copyright (c) neronodes.net
// Licensed under the MIT license.
// -------------------------------

// Call the getServers function.
const { getServers } = require('./methods');

// Create the ApiInstance class.
class ApiInstance {

	/**
     * Main class constructor
     * @param host The URL of the panel.
     * @param key The bearer token for authenticating requests.
     */
	constructor(host, key) {
		this.host = host;
		this.key = key;
	}

	/**
     * Gets a list of servers from the Panel.
     *
     * @returns {Promise}
     */
	getAllServers() {
		return new Promise((res, rej) => {
			getServers(this.host, this.key).then((response) => {
				return res(response.data);
			}).catch(err => rej(this.processError(err)));
		});
	}
}

module.exports = ApiInstance;
