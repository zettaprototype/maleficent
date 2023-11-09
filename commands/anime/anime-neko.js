import fetch from 'node-fetch'
export let on = {
	names: ['Anime Menu'],
	tags: ['neko'],
	command: ['neko'],
	limit: 4,
	register: true,
	on: async (m, {
		conn,
		mess
	}) => {
		let res = await fetch('https://drive.google.com/uc?id=1-SdFeEMuyJxmVJsmTIDbEz6TrLLe86Oz&export=download')
		let data = await res.json()
		m.reply(mess.wait)
		let neko = data[Math.floor(Math.random() * data.length)]
		conn.sendMessage(m.chat, {
			image: {
				url: neko
			},
			caption: `🎗 *Neko* `
		}, {
			quoted: m
		})
	}
};