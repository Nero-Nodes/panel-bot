// -------------------------------
// github.com/nero-nodes/panel-bot
// client/request.js
//
// Copyright (c) neronodes.net
// Licensed under the MIT license.
// -------------------------------

/* eslint-disable no-mixed-spaces-and-tabs */

// Import Axios to make HTTP requests
// to our Panel instance.
const axios = require('axios');

// Create the ApiReqeust class.
class ApiRequest {

	/**
     * Main class constructor
     * @param host The URL of the panel.
     * @param key The bearer token for authenticating requests.
     */
	constructor(host, api) {
		this.host = host;
		this.key = api;
	}

	/**
     * Executes this request object as GET.
     * @param request
     * @returns  { Promise<any> }
     */
	executeGet(request) {
		this.endpoint = request;
		return axios.default({
			url: this.host + '/' + this.getRequestEndpoint(),
			method: 'GET',
			followRedirects: true,
			maxRedirects: 5,
			headers: {
				'Authorization': 'Bearer ' + this.key,
				'Content-Type': 'application/json',
				'Accept': 'Application/vnd.pterodactyl.v1+json',
			},
		});
	}

	/**
     * Get the request endpoint.
     */
	 getRequestEndpoint() {

		// Create a switch function to determine correct endpoint.
		switch (this.endpoint.toUpperCase()) {
		case 'APPLICATION_GET_ALL_SERVERS': {
			return 'api/application/servers';
		}
		case 'APPLICATION_GET_ALL_USERS': {
			return 'api/application/users';
		}
		case 'APPLICATION_GET_ALL_NODES': {
			return 'api/application/nodes';
		}
		}

		// Define request variables here.
		const str = this.endpoint.split(':');
		const request = str[0];

		// If the request is to get all servers, return servers endpoint.
		if (request === 'APPLICATION_GET_ALL_SERVERS') {
			if (str[1] === '' || str[1] === undefined) throw new Error('Could not split enum when using GET_ALL_SERVERS');
			return 'api/application/servers';
		}

		// If the request is to get all users, return users endpoint.
		if (request === 'APPLICATION_GET_ALL_USERS') {
			if (str[1] === '' || str[1] === undefined) throw new Error('Could not split enum when using GET_ALL_USERS');
			return 'api/application/users';
		}

		// If the request is to get all nodes, return nodes endpoint.
		if (request === 'APPLICATION_GET_ALL_NODES') {
			if (str[1] === '' || str[1] === undefined) throw new Error('Could not split enum when using GET_ALL_NODES');
			return 'api/application/nodes';
		}
	}
}

module.exports = ApiRequest;
