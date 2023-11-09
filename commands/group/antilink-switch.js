export let on = {
	names: ['Group Menu'],
	tags: ['antilink'],
	command: ['antilink'],
	group: true,
	admin: true,
	owner: true,
	on: async (m, {
		conn,
		text,
		groupName,
		switchGroup
	}) => {
		if (!text) return m.reply(`Masukkan Parameternya contoh .antilink on/off`);
		let change;
		if (text.toLowerCase() === "on") {
			change = {
				antilink: true
			};
			m.reply(`Antilink berhasil diaktifkan di grup ${groupName}`);
		} else if (text.toLowerCase() === "off") {
			change = {
				antilink: false
			};
			m.reply(`Antilink berhasil dimatikan di grup ${groupName}`);
		} else {
			return m.reply(`Masukkan Parameter yang Valid (on/off)`);
		}
		switchGroup(m.chat, change);
	}
};