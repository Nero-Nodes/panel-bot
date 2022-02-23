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
			url: this.host + '/' + 'api/application/servers',
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
}

module.exports = ApiRequest;
