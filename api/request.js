const axios = require('axios');
const ApplicationRequest = require('./application');

class ApiRequest {

	constructor(host, api) {
		this.host = host;
		this.key = api;
	}

	/**
     * Executes this request object as GET
     * @param request
     * @returns {PromiseLike<any> | Promise<any>}
     */
	executeGet(request) {
		this.endpoint = request;
		return axios.default({
			url: this.trimUrl(),
			method: 'GET',
			followRedirects: true,
			maxRedirects: 5,
			headers: this.getHeaders(),
		});
	}


	/**
     * Dont use this if your just a basic Nodeactyl User. i wont help you
     */
	trimUrl() {
		const lastChar = this.host.charAt(this.host.length - 1);
		if (lastChar !== '/') {
			this.host = this.host + '/';
		}

		return this.host + this.getRequestEndpoint();
	}

	/**
     * Dont use this if your just a basic Nodeactyl User. i wont help you
     */
	getRequestEndpoint() {
		switch (this.endpoint.toUpperCase()) {
		case ApplicationRequest.GET_ALL_SERVERS: {
			return 'api/application/servers?page=1';
		}
	    }

		const str = this.endpoint.split(':');
		const request = str[0];
		if (request === undefined || request === '') throw new Error('Could not find request when splitting enum. (Contact a developer)');

		if (request === ApplicationRequest.GET_ALL_SERVERS) {
			if (str[1] === '' || str[1] === undefined) throw new Error('Could not split enum to a length of 2 when using GET_ALL_SERVERS (contact a developer)');
			return `api/application/servers?page=${str[1]}`;

		}

	}

	/**
     * Returns the header needed for a request
     * @returns {{Authorization: string, Accept: string, "Content-Type": string}}
     */
	getHeaders() {
		return {
			'Authorization': 'Bearer ' + this.key,
			'Content-Type': 'application/json',
			'Accept': 'Application/vnd.pterodactyl.v1+json',
		};
	}

}

module.exports = ApiRequest;