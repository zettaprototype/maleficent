import fetch from 'node-fetch'
export let on = {
	names: ['Anime Menu'],
	tags: ['megumin'],
	command: ['megumin'],
	limit: 4,
	register: true,
	on: async (m, {
		conn,
		mess
	}) => {
		let res = await fetch('https://drive.google.com/uc?id=1-QoFF28Xyb37OW_JF5GiQU9TAJWlso0J&export=download')
		let data = await res.json()
		m.reply(mess.wait)
		let megumin = data[Math.floor(Math.random() * data.length)]
		conn.sendMessage(m.chat, {
			image: {
				url: megumin
			},
			caption: `🎗 *Megumin* `
		}, {
			quoted: m
		})
	}
};