import { ytmp3 } from '../../lib/download.js'
export let on = {
	names: ['Downloader'],
	tags: ['ytmp3'],
	command: ['ytmp3', 'yta'],
	limit: 5,
	on: async (m, {
		conn,
		text,
		mess,
		prefix,
		command
	}) => {
		if (!text) return m.reply(`Masukan link tiktok nya! \nContoh: ${prefix + command} https://youtu.be/aBfUFr9SBY0?si=XzQRbuH4RXjtQ6wk`);
		m.reply(mess.wait)
		let {
			audio,
			title
		} = await ytmp3(text)
		conn.sendMessage(m.chat, {
			document: {
				url: audio
			},
			mimetype: 'audio/mpeg',
			fileName: `${title}.mp3`
		}, {
			quoted: m
		})
	}
};