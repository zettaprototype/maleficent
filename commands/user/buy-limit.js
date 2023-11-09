export let on = {
	names: ['User Menu'],
	tags: ['buylimit'],
	command: ['buylimit'],
	register: true,
	on: async (m, {
		conn,
		text,
		dbMinus,
		dbPlus,
		cekuang
	}) => {
		if (!text) return m.reply(`Masukkan Parameter contoh: .buylimit 1`);
		if (cekuang) return m.reply(`Uang kamu tidak cukup atau habis untuk membeli limit\nsilahkan bayar hutang kalo minus punya hutang\nketik .claim untuk uang harian\natau Ketik .my untuk cek sisa uang`);
		let deduct;
		let upgrade;
		if (/^[1-9]\d*$/.test(text)) {
			let jumlahLimit = parseInt(text);
			let hargaLimit = jumlahLimit * 10; //dont change 10 per 1 limit
			deduct = {
				uang: hargaLimit
			};
			upgrade = {
				limit: jumlahLimit
			};
			await dbMinus(m.sender, deduct);
			await dbPlus(m.sender, upgrade);
			m.reply(`Kamu berhasil membeli ${jumlahLimit} limit dengan harga ${hargaLimit} uang`);
		} else {
			return m.reply(`Masukkan parameter angka yang valid`);
		}
	}
};