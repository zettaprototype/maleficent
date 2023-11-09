import { fbdl } from '../../lib/download.js';
export let on = {
	names: ['Downloader'],
	tags: ['facebook'],
	command: ['fb', 'facebook', 'fbdl'],
	limit: 5,
	on: async (m, {
		conn,
		text,
		mess,
		prefix,
		command
	}) => {
		if (!text) return m.reply(`Masukan link facebook nya! \nContoh: ${prefix + command} https://www.facebook.com/vvalent228/videos/658537269609282/?mibextid=h4kR3UXRu7XTHhH5`);
		m.reply(mess.wait)
		let {
			video
		} = await fbdl(text)
		conn.sendFile(m.chat, video, {
			caption: `🎗 Facebook`,
			quoted: m
		})
	}
};