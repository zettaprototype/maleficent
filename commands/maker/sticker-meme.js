import { upload2 } from '../../lib/UploaderMedia.js'
export let on = {
	names: ['Maker'],
	tags: ['stickermeme', 'smeme'],
	command: ['stickermeme', 'smeme'],
	limit: 5,
	on: async (m, {
		conn,
		prefix,
		command,
		mime,
		mess,
		text,
		quoted,
		setting
	}) => {
		let pack = setting.botName
		let own = setting.footer
		if (!/webp/.test(mime) || /image/.test(mime) || m.mtype === 'imageMessage') {
			if (!text) return m.reply(`Balas Atau Kirim image dengan caption ${prefix + command} text1|text2`)
			m.reply(mess.wait)
			let up = text.split('|')[0] ? text.split('|')[0] : '-'
			let down = text.split('|')[1] ? text.split('|')[1] : '-'
			let content = await conn.downloadAndSaveMediaMessage(quoted)
			let res = await upload2(content)
			let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(up)}/${encodeURIComponent(down)}.png?background=${res}`
			await conn.sendImageAsSticker(m.chat, smeme, m, {
				packname: pack,
				author: own
			});
		} else {
			m.reply(`Balas Atau Kirim image dengan caption ${prefix + command} text1|text2`)
		}
	}
};