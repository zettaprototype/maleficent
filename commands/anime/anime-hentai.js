import fetch from 'node-fetch'
export let on = {
	names: ['Anime Menu'],
	tags: ['hentai'],
	command: ['hentai'],
	limit: 4,
	register: true,
	on: async (m, {
		conn,
		mess
	}) => {
		let res = await fetch('https://drive.google.com/uc?id=1-FGwrwHP9fLf-PPBAxVtOhIEYvfuzgcL&export=download')
		let data = await res.json()
		m.reply(`Loading...`)
		let hentai = data[Math.floor(Math.random() * data.length)]
		conn.sendMessage(m.chat, {
			image: {
				url: hentai
			},
			caption: `🎗 *Hentai* `
		}, {
			quoted: m
		})
	}
};