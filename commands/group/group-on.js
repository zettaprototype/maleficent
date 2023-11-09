export let on = {
	names: ['Group Menu'],
	tags: ['groupon', 'buka'],
	command: ['groupon', 'buka'],
	group: true,
	admin: true,
	on: async (m, {
		conn
	}) => {
		conn.groupSettingUpdate(m.chat, "not_announcement");
		m.reply(`Group Telah Di Buka Semua Anggota Dapat Mengirim Pesan`)
	}
};