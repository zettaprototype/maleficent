import { ttdl } from '../../lib/download.js'
export let on = {
	names: ['Downloader'],
	tags: ['tiktok', 'titit'],
	command: ['tt', 'tiktok', 'ttdl', 'titit', 'ttnowm'],
	limit: 3,
	on: async (m, {
		conn,
		text,
		mess,
		prefix,
		command
	}) => {
		if (!text) return m.reply(`Masukan tiktok contoh\n${prefix+command} ` + 'https://vt.tiktok.com/ZSNYfYdLj/')
		let {
			title,
			name,
			username,
			published,
			like,
			comment,
			share,
			views,
			bookmark,
			video,
			duration
		} = await ttdl(text)
		m.reply(mess.wait)
		let txt = `*TIKTOK*\n`
		txt += ` ⭔ Name : ${name}\n`
		txt += ` ⭔ Judul : ${title}\n`
		txt += ` ⭔ User Name : ${username}\n`
		txt += ` ⭔ Published : ${published}\n`
		txt += ` ⭔ Like : ${like}\n`
		txt += ` ⭔ Comment : ${comment}\n`
		txt += ` ⭔ Share : ${share}\n`
		txt += ` ⭔ Views : ${views}\n`
		txt += ` ⭔ Bookmark : ${bookmark}\n`
		txt += ` ⭔ Duration : ${duration}`
		conn.sendFile(m.chat, video, {
			caption: txt,
			quoted: m
		})
	}
};