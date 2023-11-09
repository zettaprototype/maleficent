import fetch from 'node-fetch'
export let on = {
	names: ['Downloader'],
	tags: ['instagram'],
	command: ['instagram', 'ig', 'igdl'],
	limit: 8,
	on: async (m, {
		conn,
		text,
		mess,
		prefix,
		command
	}) => {
		if (!text) return m.reply(`Masukan agram contoh ${prefix+command} https://www.instagram.com/p/Cx2oXj-PQNN/?igshid=MTc4MmM1YmI2Ng==`);
		let res = await fetch('https://vihangayt.me/download/instagram?url=' + text);
		let igeh = await res.json();
		m.reply(mess.wait);
		if (igeh.data && igeh.data.data.length > 0) {
			for (let item of igeh.data.data) {
				await new Promise(resolve => setTimeout(resolve, 3000));
				conn.sendFile(m.chat, item.url, {
					quoted: m
				});
			}
		}
	}
};