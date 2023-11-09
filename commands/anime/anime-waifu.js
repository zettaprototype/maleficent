import fetch from 'node-fetch'
export let on = {
	names: ['Anime Menu'],
	tags: ['waifu'],
	command: ['waifu'],
	limit: 4,
	register: true,
	on: async (m, {
		conn,
		mess
	}) => {
		let res = await fetch('https://drive.google.com/uc?id=1-SiJuum6JwYBeWUHZju6jn6qdXpvRacy&export=download')
		let data = await res.json()
		m.reply(mess.wait)
		let waifu = data[Math.floor(Math.random() * data.length)]
		conn.sendMessage(m.chat, {
			image: {
				url: waifu
			},
			caption: `🎗 *Waifi* `
		}, {
			quoted: m
		})
	}
};