export let on = {
	names: ['Maker'],
	tags: ['sticker'],
	command: ['sticker', 's', 'stiker', 'sk'],
	limit: 2,
	on: async (m, {
		conn,
		prefix,
		command,
		mime,
		mess,
		quoted,
		setting
	}) => {
		let pack = setting.botName;
		let own = setting.footer;
		if (/image/.test(mime) || m.mtype === 'imageMessage') {
			if (!quoted) return;
			let buffer = await quoted.download();
			m.reply(mess.wait);
			conn.sendImageAsSticker(m.chat, buffer, m, {
				packname: pack,
				author: own
			});
		} else {
			m.reply(`Kirim gambar atau video dengan caption ${prefix + command} atau balas gambar yang sudah dikirim`);
		}
	}
};