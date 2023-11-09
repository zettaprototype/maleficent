export let on = {
	names: ['User Menu'],
	tags: ['daftar'],
	command: ['daftar', 'verify', 'v'],
	on: async (m, {
		text,
		mess,
		addLimit,
		makeid,
		sleep,
		isRegister,
		registering
	}) => {
		if (isRegister) return m.reply(mess.registered);
		let nama = text.split(".")[0];
		let umur = text.split(".")[1];
		let sender = m.sender;
		if (!nama || !umur) {
			return m.reply('Akses ditolak! Masukkan nama dan umur yang benar. \ncontoh .v menu.100');
		}
		const user = {
			id: sender,
			registered: true,
			nama: nama,
			umur: umur,
			seri: makeid(10)
		};
		registering(user);
		addLimit(m.sender, 15);
		await sleep(3000)
		m.reply(`Berhasil Daftar √\nNama: ${nama}\nUmur: ${umur}\nSerial Number: ${user.seri}\nAnda mendapatkan 15 limit setelah mendaftar.\nSilahkan Ketik .menu `)
	}
};