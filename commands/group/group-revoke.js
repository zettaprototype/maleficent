export let on = {
	names: ['Group Menu'],
	tags: ['resetlink', 'revoke'],
	command: ['resetlink', 'revoke'],
	group: true,
	admin: true,
	on: async (m, {
		conn
	}) => {
		conn.groupRevokeInvite(m.chat)
		m.reply(`Sukses`)
	}
};