export let on = {
	names: ['Maker'],
	tags: ['attp', 'ttp'],
	command: ['attp', 'ttp'],
	limit: 2,
	on: async (m, {
		conn,
		prefix,
		text,
		command,
		mess,
		setting
	}) => {
		let pack = setting.botName
		let own = setting.footer
		if (!text) return m.reply(`Kirim perintah ${prefix+command} text\ncontoh: ${prefix+command} ${setting.botName}`)
		let media = 'https://vihangayt.me/maker/text2gif?q=' + text
		m.reply(mess.wait);
		let buffer = await media
		await conn.sendImageAsSticker(m.chat, buffer, m, {
			packname: pack,
			author: own
		})
	}
};