// -------------------------------
// github.com/nero-nodes/panel-bot
// api/application.js
//
// Copyright (c) neronodes.net
// Licensed under the MIT license.
// -------------------------------

module.exports = {
	GET_ALL_SERVERS: 'APPLICATION_GET_ALL_SERVERS',

	/**
     * @return {string}
     */
	GET_SERVER_PAGE(pageNum) {
		return `APPLICATION_GET_ALL_SERVERS:${pageNum}`;
	},
};