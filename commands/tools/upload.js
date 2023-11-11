import fs from 'fs';
import { upload } from '../../lib/UploaderMedia.js'

export let on = {
	names: ['Tools'],
	tags: ['tourl', 'upload'],
	command: ['tourl', 'upload'],
	limit: 5,
	register: true,
	on: async (m, {
		conn,
		mess,
		command,
		prefix,		
		mime,
		quoted,
		getRandom,
		bytesToSize
	}) => {
		if (!mime && !quoted) return
		if (/webp/.test(mime) || m.mtype === 'stickerMessage') {
			let media = await conn.downloadAndSaveMediaMessage(quoted)
			m.reply(mess.wait);
			let buffer_up = fs.readFileSync(media);
			let rand2 = 'tmp/' + getRandom('.webp');
			fs.writeFileSync(`./${rand2}`, buffer_up);

			let {
				name,
				url,
				size
			} = await upload(rand2);
			let sizeNy = bytesToSize(size);

			let teks = `UPLOAD SUKSES\n*Url :* ${url}\n`
			teks += `${java} *Name :* ${name}\n`
			teks += `${java} *Size :* ${sizeNy}\n`
			teks += `${java} *Type:* Sticker`

			conn.sendMessage(m.chat, {
				text: teks
			}, {
				quoted: m
			});

		} else if (/image/.test(mime) || m.mtype === 'imageMessage' ||
			/audio/.test(mime) || m.mtype === 'audioMessage' ||
			/video/.test(mime) || m.mtype === 'videoMessage') {

			let mediaType;
			let fileExt;

			if (/image/.test(mime) || m.mtype === 'imageMessage') {
				mediaType = 'image';
				fileExt = '.jpeg';
			} else if (/audio/.test(mime) || m.mtype === 'audioMessage') {
				mediaType = 'audio';
				fileExt = '.mp3';
			} else if (/video/.test(mime) || m.mtype === 'videoMessage') {
				mediaType = 'video';
				fileExt = '.mp4';
			}

			let media = await conn.downloadAndSaveMediaMessage(quoted)
			m.reply(mess.wait);
			let buffer_up = fs.readFileSync(media);
			let rand2 = 'tmp/' + getRandom(`${fileExt}`);
			fs.writeFileSync(`./${rand2}`, buffer_up);

			let {
				name,
				url,
				size
			} = await upload(rand2);
			let sizeNy = bytesToSize(size);
			let teks = `UPLOAD SUKSES\n`
			teks += `${java} *Url :* ${url}\n`
			teks += `${java} *Name :* ${name}\n`
			teks += `${java} *Size :* ${sizeNy}\n`
			teks += `${java} *Type:* ${mediaType.charAt(0).toUpperCase() + mediaType.slice(1)}`
			conn.sendMessage(m.chat, {
				text: teks
			}, {
				quoted: m
			});
		} else {
			m.reply('Balas Media Atau Kirim Media Dengan Caption .tourl atau .upload')
		}
	}
};
