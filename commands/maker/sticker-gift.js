import fs from 'fs'
export let on = {
	names: ['Maker'],
	tags: ['stickergif', 'sgif'],
	command: ['stickergif', 'sgif'],
	limit: 2,
	on: async (m, {
		conn,
		prefix,
		command,
		mime,
		mess,
		quoted,
		setting
	}) => {
		let pack = setting.botName
		let own = setting.footer
		if (/video/.test(mime) || m.mtype === 'videoMessage') {
			if (!quoted) return
			let buffer = await quoted.download();
			m.reply(mess.wait);
			conn.sendImageAsSticker(m.chat, buffer, m, {
				packname: pack,
				author: own
			});
		} else {
			m.reply(`Kirim video dengan caption ${prefix + command} atau balas video yang sudah dikirim`);
		}
	}
};