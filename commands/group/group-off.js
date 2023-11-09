export let on = {
	names: ['Group Menu'],
	tags: ['groupoff', 'tutup'],
	command: ['groupoff', 'tutup'],
	group: true,
	admin: true,
	on: async (m, {
		conn
	}) => {
		conn.groupSettingUpdate(m.chat, "announcement");
		m.reply(`Group Telah Di Tutup Semua Anggota Tidak Dapat Mengirim Pesan Admin Kontol`)
	}
};