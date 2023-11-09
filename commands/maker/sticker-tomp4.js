import { webp2mp4File } from "../../lib/Webp_Tomp4.js"
export let on = {
	names: ['Maker'],
	tags: ['tomp4', 'tovideo'],
	command: ['tomp4', 'tovideo'],
	limit: 2,
	on: async (m, {
		conn,
		mess,
		quoted,
		mime,
		prefix,
		command
	}) => {
		if (!quoted) return m.reply('Reply Stiker Gif')
		if (!/webp/.test(mime)) return m.reply(`balas stiker dengan caption *${prefix + command}*`)
		m.reply(mess.wait)
		let media = await conn.downloadAndSaveMediaMessage(quoted)
		let webpToMp4 = await webp2mp4File(media)
		await conn.sendMessage(m.chat, {
			video: {
				url: webpToMp4.result,
			},
			caption: 'Converted To Video'
		}, {
			quoted: m
		})
	}
};