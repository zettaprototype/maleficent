export let on = {
	names: ['User Menu'],
	tags: ['limit'],
	command: ['limit'],
	on: async (m, {
		checkLimitUser
	}) => {
		let limitUser = checkLimitUser(m.sender);
		if (limitUser !== undefined) {
			m.reply(`Kamu Memiliki ${limitUser} Limit Tersisa`);
		} else {
			m.reply('Limit tidak ditemukan jika owner dan eke di bebaskan');
		}
	}
};