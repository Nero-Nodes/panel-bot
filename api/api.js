// -------------------------------
// github.com/nero-nodes/panel-bot
// api/api.js
//
// Copyright (c) neronodes.net
// Licensed under the MIT license.
// -------------------------------

const { getServers } = require('./methods');

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
     * Gets a list of servers from your panel, currently this only get the first page but i will add support for grabbing ALL pages with this methods
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