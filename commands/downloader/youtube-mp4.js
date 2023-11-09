import { ytmp4 } from '../../lib/download.js'
export let on = {
	names: ['Downloader'],
	tags: ['ytmp4'],
	command: ['ytmp4', 'ytv'],
	limit: 10,
	on: async (m, {
		conn,
		text,
		mess,
		prefix,
		command
	}) => {
		if (!text) return m.reply(`Masukan Link Youtubenya ${prefix+command} link`)
		m.reply(mess.wait)
		let {
			title,
			size,
			video,
			quality			
		} = await ytmp4(text)
		let txt = `*YOUTUBE VIDEO*\n`
		txt += ` ⭔ Judul : ${title}\n`
		txt += ` ⭔ Kualitas : ${quality}\n`
		txt += ` ⭔ Size : ${size}`
		conn.sendFile(m.chat, video, {
			caption: txt,
			quoted: m
		})
	}
};