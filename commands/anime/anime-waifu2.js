export let on = {
	names: ['Anime Menu'],
	tags: ['waifu2'],
	command: ['waifu2'],
	limit: 4,
	register: true,
	on: async (m, {
		conn,
		mess
	}) => {
		let res = 'https://api.xfarr.com/api/randomimage/nsfwwaifu?apikey=fBwANmhn7q'
		let waifu2 = await res
		m.reply(mess.wait)
		conn.sendFile(m.chat, waifu2, {
			caption: `🎗 *waifu2 NSFW* `,
			quoted: m
		})
	}
};