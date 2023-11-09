import fetch from 'node-fetch'
export let on = {
	names: ['Tools'],
	tags: ['ai', 'chatgpt', 'openai'],
	command: ['ai', 'chatgpt', 'openai'],
	limit: 5,
	register: true,
	on: async (m, {
		text
	}) => {
		if (!text) return m.reply('contoh .ai apa kabar?')
		await m.reply('Menunggu Respon...')
		let res = await fetch(`https://vihangayt.me/tools/chatgpt?q=${text}`)		
		let open = await res.json()
		let ai = await open.data
		await m.reply(`${ai}`)
	}
};