export let on = {
	names: ['User Menu'],
	tags: ['hour'],
	command: ['hour'],
	register: true,
	on: async (m, {
		Hour
	}) => {
		try {
			let hourly = 5
			const remainingTime = await Hour(m.sender, hourly);
			if (typeof remainingTime === "number") {
				return m.reply(`Kamu sudah melakukan claim dalam 1 jam terakhir. Tunggu ${remainingTime} menit lagi sebelum dapat melakukan claim kembali.\nkamu juga bisa claim uang  ketik .claimuang`);
			} else {
				m.reply(`Claim Perjam berhasil. Kamu mendapatkan ${hourly} Limit. Kamu bisa melakukan claim lagi dalam 1 jam mendatang.`);
			}
		} catch (error) {
			m.reply("Data pengguna tidak ditemukan.");
		}
	}
};