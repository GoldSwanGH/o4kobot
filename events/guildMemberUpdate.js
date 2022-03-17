const Database = require("@replit/database");
const db = new Database();

module.exports = {
  name: 'guildMemberUpdate',
	execute(oldGuildMember, newGuildMember) {
    console.log("опа кто-то меняет чота у пользователя " + oldGuildMember.user.tag);
		if (oldGuildMember.displayName != newGuildMember.displayName) {
      db.get("channel").then(value => {
        let channel = newGuildMember.client.channels.cache.get(value);
        channel.send(`${newGuildMember}, добро пожаловать на сервер ${newGuildMember.guild.name }.`);
        /*channel.send('' + newGuildMember.displayName + ', добро пожаловать на сервер ' + newGuildMember.guild.name + '.');*/
        console.log("забулил.")
      });
    }
	},
}