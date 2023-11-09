export let on = {
	names: ['Group Menu'],
	tags: ['jadiadmin', 'promote'],
	command: ['jadiadmin', 'promote'],
	group: true,
	admin: true,
	on: async (m, {
		conn,
		mentionUser
	}) => {
		if (mentionUser.length !== 0) {
			conn.groupParticipantsUpdate(m.chat, [mentionUser[0]], "promote");
			m.reply(`Sekarang ${mentionUser} Jadi Admin`)
		} else {
			m.reply(`Tag Yang Mau Di Promote`)
		}
	}
};