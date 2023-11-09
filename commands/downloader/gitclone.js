import fetch from 'node-fetch'
export let on = {
	names: ['Downloader'],
	tags: ['gitclone'],
	command: ['git', 'gitclone'],
	limit: 2,
	on: async (m, {
		conn,
		text,
		args,
		mess,
		prefix,
		command
	}) => {
		if (!text) return m.reply(`link githubnya mana?\n*Contoh:*\n${prefix+command} https://github.com/menu20/Millie-Bot`)
		let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
		let linknya = text
		if (!regex1.test(linknya)) return m.reply('link salah!');
		let [, user, repo] = args[0].match(regex1) || []
		repo = repo.replace(/.git$/, '')
		let url = `https://api.github.com/repos/${user}/${repo}/zipball`
		let filename = (await fetch(url, {
			method: 'HEAD'
		})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
		m.reply(`*Mohon tunggu*,\n*sedang mengirim repository..*`)
		conn.sendMessage(m.chat, {
			document: {
				url: url
			},
			fileName: filename,
			mimetype: 'application/zip'
		}, {
			quoted: m
		}).catch((err) => m.reply('Maaf link github yang kamu berikan di private, dan tidak bisa di jadikan file'))
	}
};