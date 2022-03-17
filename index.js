const fs = require('node:fs');
const { Client, Intents } = require('discord.js');
const Database = require("@replit/database");
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MEMBERS], partials: ["GUILD_MEMBER"] });
const db = new Database();
db.set("channel", "300226319927738370").then(() => {});
const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
	const event = require(`./events/${file}`);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args));
    console.log("зарегал одноразовый ивент " + event.name);
	} else {
		client.on(event.name, (...args) => event.execute(...args));
    console.log("зарегал ивент " + event.name);
	}
}

client.login(process.env.TOKEN);
