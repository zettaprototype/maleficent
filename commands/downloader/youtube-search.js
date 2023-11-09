import { youtubeSearch } from '../../lib/yts.js'
export let on = {
	names: ['Downloader'],
	tags: ['ytsearch'],
	command: ['ytsearch', 'yts'],
	limit: 2,
	on: async (m, {
		text,
		prefix,
		command
	}) => {
		if (!text) return m.reply(`Masukan Info Yang Ingin Di Cari\ncontoh ${prefix+command} laila canggung`);
		const {
			video,
			channel
		} = await youtubeSearch(text)
		m.reply(`Loading...`)
		let teks = [...video, ...channel].map(v => {
			switch (v.type) {
				case 'video':
					return `
${java} *${v.title}* 
${java} *${v.url}*
${java} Duration: ${v.durationH}
${java} Uploaded ${v.publishedTime}
${java} ${v.view} views
      `.trim()
				case 'channel':
					return `
╭──────━• *CHANNEL*
│🎀 *${v.channelName}* 
│🔗 *${v.url}*
│📛 _${v.subscriberH} Subscriber_
│🎥 ${v.videoCount} video
┗──────━•
`.trim()
			}
		}).filter(v => v).join('\n\n─────────────━─────────────\n\n')
		m.reply(` 🎗 *YOUTUBE SEARCH* 🎗 \n\n` + teks)
	}
};