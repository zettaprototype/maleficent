export let on = {
	names: ['Main Menu'],
	tags: ['script'],
	command: ['script', 'sc', 'repo', 'repositori'],
	on: async (m, {
		conn
	}) => {
		let script = 'Menggunakan Base Script Ini\n\https://github.com/ruhend2001/maleficent'
		conn.sendMessage(m.chat, {
			text: script
		}, {
			quoted: m
		});
	}
};