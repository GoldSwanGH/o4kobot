module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
		console.log(`чотко залогинился как ${client.user.tag}`);
	},
};