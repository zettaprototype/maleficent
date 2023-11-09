import { exec } from 'child_process';
import fs from 'fs';

export let on = {
	names: ['Audio'],
	tags: ['bass', 'blown', 'deep', 'earrape', 'fast', 'nightcore', 'reverse', 'robot', 'slow', 'smooth', 'tupai'],
	command: ['bass', 'blown', 'deep', 'earrape', 'fast', 'nightcore', 'reverse', 'robot', 'slow', 'smooth', 'tupai'],
	limit: 2,
	on: async (m, {
		conn,
		command,
		prefix,
		mime,
		quoted,
		mess,
		getRandom
	}) => {
		let set
		if(/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
		if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
		if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
		if (/earrape/.test(command)) set = '-af volume=12'
		if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
		if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
		if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
		if (/reverse/.test(command)) set = '-filter_complex "areverse"'
		if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
		if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
		if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
		if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
		if (/audio/.test(mime)) {
			m.reply(mess.wait)
			let media = await conn.downloadAndSaveMediaMessage(quoted)
			let ran = 'tmp/' + getRandom('.mp3')
			await exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
				if (err) return m.reply(err)
				let buff = fs.readFileSync(ran)
				conn.sendFile(m.chat, buff, {
					mimetype: 'audioMessage',
					ptt: true,
					quoted: m
				})
			})
		} else {
			m.reply(`Balas audio yang ingin diubah dengan caption *${prefix + command}*`)
		}
	}
};