export let on = {
	names: ['Anime Menu'],
	tags: ['milf'],
	command: ['milf'],
	limit: 4,
	register: true,
	on: async (m, {
		conn,
		mess
	}) => {
		let res = 'https://api.xfarr.com/api/randomimage/nsfwmilf?apikey=fBwANmhn7q'
		let milf = await res
		m.reply(mess.wait)
		conn.sendMessage(m.chat, {
			image: {
				url: milf
			},
			caption: `🎗 *Milf* `
		}, {
			quoted: m
		})
	}
};