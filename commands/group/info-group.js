export let on = {
	names: ['Group Menu'],
	tags: ['infogc', 'infogroup'],
	command: ['infogc', 'infogroup'],
	group: true,
	on: async (m, {
		conn,
		groupName,
		participants,
		groupAdmins
	}) => {
		let info = `*INFO GROUP*\n• *ID:* ${m.chat}\n• *Nama Grup:* ${groupName}\n• *Total Member:* ${participants.length}\n• *Total Admin:* ${groupAdmins.length}`
		m.reply(info);
	}
};