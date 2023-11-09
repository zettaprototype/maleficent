export let on = {
	names: ['Group Menu'],
	tags: ['hidetag'],
	command: ['ht', 'hidetag'],
	group: true,
	admin: true,
	owner: true,
	on: async (m, {
		conn,
		text,
		participants
	}) => {
		let mem = [];
		participants.map(i => mem.push(i.id))
		conn.sendMessage(m.chat, { text: text ? text : '', mentions: mem }, { quoted: m	});
	}
};