module.exports = {
	GET_ALL_SERVERS: 'APPLICATION_GET_ALL_SERVERS',

	/**
     * @return {string}
     */
	GET_SERVER_PAGE(pageNum) {
		return `APPLICATION_GET_ALL_SERVERS:${pageNum}`;
	},
};