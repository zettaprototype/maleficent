export let on = {
	names: ['Group Menu'],
	tags: ['kick', 'tendang'],
	command: ['kick', 'tendang', '-'],
	group: true,
	admin: true,
	on: async (m, {
		conn,
		mentionUser,
		mentionByReply
	}) => {
		if (mentionUser.length !== 0) {
			conn.groupParticipantsUpdate(m.chat, [mentionUser[0]], "remove");
			m.reply(`Berhasil Menghapus ${mentionUser} Dari Grup Ini`)
		} else if (mentionByReply) {
			conn.groupParticipantsUpdate(m.chat, [mentionByReply], "remove");
			m.reply(`Berhasil Menghapus ${mentionByReply} Dari Grup Ini`)
		} else {
			m.reply(`Tag Yang Mau Di Kick`)
		}
	}
};