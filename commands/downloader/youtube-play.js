import fetch from 'node-fetch'
import fs from 'fs'
import axios from 'axios'
import { exec } from 'child_process'
import { youtubeSearch } from '../../lib/yts.js'

export let on = {
	names: ['Downloader'],
	tags: ['play', 'song', 'lagu'],
	command: ['play', 'song', 'lagu'],
	limit: 5,
	on: async (m, {
		conn,
		text,
		mess,
		getRandom
	}) => {
		if (!text) return m.reply('*Masukan Lagu Yang Ingin Di Cari*');
		let vid = (await youtubeSearch(text)).video[0]
		m.reply(mess.wait)
		if (!vid) m.reply('Tidak di temukan, coba untuk membalikkan judul dan author nya')
		let {
			title,
			description,
			thumbnail,
			videoId,
			durationH,
			viewH,
			publishedTime
		} = vid
		const url = 'http://youtu.be/' + videoId;
		let response = await fetch('https://vihangayt.me/download/ytmp4?url=' + url)
		let data = await response.json()
		let Json = data.data.vid_360p
		let txt = `╭──── 〔 YOUTUBE 〕 ─⬣\n`
		txt += `  *Data Di Temukan*\n`
		txt += ` ⬡ Judul: ${title}\n`
		txt += ` ⬡ Durasi: ${durationH}\n`
		txt += ` ⬡ Views: ${viewH}\n`
		txt += ` ⬡ Upload: ${publishedTime}\n`
		txt += ` ⬡ Link: ${url}\n`
		txt += `╰────────⬣\n\n`
		txt += `*Loading Audio Sedang Dikirim...*`
		conn.sendMessage(m.chat, {
			image: {
				url: thumbnail
			},
			caption: txt
		}, {
			quoted: m
		});
		async function getBuffer(url, options) {
			try {
				options ? options : {}
				const res = await axios({
					method: "get",
					url,
					headers: {
						'DNT': 1,
						'Upgrade-Insecure-Request': 1
					},
					...options,
					responseType: 'arraybuffer'
				})
				return res.data
			} catch (err) {
				return err
			}
		}
		var name = `./tmp/${Date.now()}.mp4`
		fs.writeFileSync(name, await getBuffer(Json))
		var buffer = 'tmp/' + getRandom('.mp3')
		await exec(`ffmpeg -i ${name} -filter:a "volume=2.0" ${buffer}`, async (err) => {
			conn.sendFile(m.chat, fs.readFileSync(buffer), {
				mimetype: 'audioMessage',
				ptt: true,
				quoted: m
			})
		})
	}
};