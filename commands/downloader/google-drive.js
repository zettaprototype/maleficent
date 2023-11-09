import fetch from 'node-fetch'
export let on = {
	names: ['Downloader'],
	tags: ['googledrive'],
	command: ['gdrive', 'googledrive'],
	limit: 25,
	on: async (m, {
		conn,
		text,
		mess,
		prefix,
		command
	}) => {
		if (!text) return m.reply(`Masukan Link Google Drove nya contoh ${prefix+command} https://drive.google.com/file/d/1BKaXs8uIt4_C_dEKUje-nn-XYYNOO07y/view?usp=drivesdk`)
		let res = await fetch(`https://api.xfarr.com/api/download/gdrive?apikey=fBwANmhn7q&url=${text}`)
		m.reply(mess.wait)
		let data = await res.json()
		let download = data.result
		let name = download.name
		let mime = download.mimetype
		let link = download.url
		let txt = ` *Google Drive*\n`
		txt += ` ${java} Name: ${name}\n`
		txt += ` ${java} type: ${mime}`
		conn.sendMessage(m.chat, {
			document: {
				url: link
			},
			caption: txt,
			fileName: name,
			mimetype: mime
		}, {
			quoted: m
		})
	}
};