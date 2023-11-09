import { toAudio } from '../../lib/converter.js'
import fs from 'fs'

export let on = {
	names: ['Maker'],
	tags: ['toaudio'],
	command: ['tomp3', 'toaudio'],
	limit: 2,
	on: async (m, {
		conn,
		prefix,
		command,
		args,
		mess,
		mime,
		quoted
	}) => {
		if (/video/.test(mime) || m.mtype === 'videoMessage') {
			if (!quoted) return
			let buffer = await quoted.download();
			m.reply(mess.wait)
			let media = await buffer;
			let audio = await toAudio(media, 'mp4')
			conn.sendMessage(m.chat, {
				audio: audio,
				mimetype: 'audio/mp4',
				fileName: `.mp3`,
				ptt: true
			}, {
				quoted: m
			})
		} else {
			m.reply(`reply video atau kirim video dengan pesan ${prefix+command}`)
		}
	}
};