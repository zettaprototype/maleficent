import fs from 'fs';
import { exec } from 'child_process';

export let on = {
	names: ['Maker'],
	tags: ['toimage'],
	command: ['toimg', 'toimage'],
	limit: 2,
	on: async (m, {
		conn,
		mess,
		prefix,
		quoted,
		mime,
		command,
		getRandom
	}) => {
		if (!quoted) return m.reply('Reply Image');
		if (!/webp/.test(mime)) return m.reply(`balas stiker dengan caption *${prefix + command}*`);
		let media = await conn.downloadAndSaveMediaMessage(quoted);
		let ran = 'tmp/' + getRandom('.png');
		m.reply(mess.wait);
		await exec(`ffmpeg -i ${media} ${ran}`, (err) => {
			if (err) return reply(`${err}`);
			let buffer = fs.readFileSync(ran);
			conn.sendMessage(m.chat, {
				image: buffer,
				caption: `Converted To Image`
			}, {
				quoted: m
			});
		});
	}
};