export let on = {
	names: ['User Menu'],
	tags: ['profile', 'balance'],
	command: ['profile', 'my', 'me', 'balance'],
	on: async (m, {
		claim,
		Hour,
		getProfileData,
		checkLimitUser,
		checkPremiumUser,
		checkRegisteredUser
	}) => {
		let isPremium = await checkPremiumUser(m.sender);
		let prem = isPremium ? 'Aktif' : 'Tidak';
		let isRegister = await checkRegisteredUser(m.sender);
		let reg = isRegister ? 'Sudah Daftar' : 'Belum Daftar';
		let limitUser = await checkLimitUser(m.sender);
		let userData = await getProfileData(m.sender);
		if (!m.fromMe && userData) {
			m.reply(`Profile Kamu\n\nTerdaftar: ${reg}\nPremium: ${prem}\nNama: ${userData.nama}\nUmur: ${userData.umur}\nSeri: ${userData.seri}\nLimit: ${limitUser}\nUang: ${userData.uang}\nKupon: ${userData.kupon}\n`);
		} else {
			if (!m.fromMe) {
				m.reply('Profil tidak ditemukan');
			}
		}
	}
};