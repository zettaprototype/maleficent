export let on = {
	names: ['Kalkulator'],
	tags: ['tambah', 'kurang', 'kali', 'bagi'],
	command: ['tambah', 'kurang', 'kali', 'bagi'],
	limit: 3,
	on: async (m, {
		conn,
		prefix,
		text,
		cmd,
		command
	}) => {
		if (cmd === 'tambah') {
			if (!text) return m.reply(`Gunakan dengan cara ${command} *angka* *angka*\n\n_Contoh_\n\n${command} 1 2`);
			var num_one = text.split(' ')[0];
			var num_two = text.split(' ')[1];
			if (!num_one) return m.reply(`Gunakan dengan cara ${prefix+command} *angka* *angka*\n\n_Contoh_\n\n${prefix+command} 1 2`);
			if (!num_two) return m.reply(`Gunakan dengan cara ${prefix+command} *angka* *angka*\n\n_Contoh_\n\n${prefix+command} 1 2`);
			var nilai_one = Number(num_one);
			var nilai_two = Number(num_two);
			m.reply(`${nilai_one + nilai_two}`);
		}
		if (cmd === 'kurang') {
			if (!text) return m.reply(`Gunakan dengan cara ${command} *angka* *angka*\n\n_Contoh_\n\n${command} 1 2`);
			var num_one = text.split(' ')[0];
			var num_two = text.split(' ')[1];
			if (!num_one) return m.reply(`Gunakan dengan cara ${prefix+command} *angka* *angka*\n\n_Contoh_\n\n${prefix+command} 1 2`);
			if (!num_two) return m.reply(`Gunakan dengan cara ${prefix+command} *angka* *angka*\n\n_Contoh_\n\n${prefix+command} 1 2`);
			var nilai_one = Number(num_one);
			var nilai_two = Number(num_two);
			m.reply(`${nilai_one - nilai_two}`);
		}
		if (cmd === 'kali') {
			if (!text) return m.reply(`Gunakan dengan cara ${command} *angka* *angka*\n\n_Contoh_\n\n${command} 1 2`);
			var num_one = text.split(' ')[0];
			var num_two = text.split(' ')[1];
			if (!num_one) return m.reply(`Gunakan dengan cara ${prefix+command} *angka* *angka*\n\n_Contoh_\n\n${prefix+command} 1 2`);
			if (!num_two) return m.reply(`Gunakan dengan cara ${prefix+command} *angka* *angka*\n\n_Contoh_\n\n${prefix+command} 1 2`);
			var nilai_one = Number(num_one);
			var nilai_two = Number(num_two);
			m.reply(`${nilai_one * nilai_two}`);
		}
		if (cmd === 'bagi') {
			if (!text) return m.reply(`Gunakan dengan cara ${prefix+command} *angka* *angka*\n\n_Contoh_\n\n${command} 1 2`);
			var num_one = text.split(' ')[0];
			var num_two = text.split(' ')[1];
			if (!num_one) return m.reply(`Gunakan dengan cara ${prefix+command} *angka* *angka*\n\n_Contoh_\n\n${prefix+command} 1 2`);
			if (!num_two) return m.reply(`Gunakan dengan cara ${prefix+command} *angka* *angka*\n\n_Contoh_\n\n${prefix+command} 1 2`);
			var nilai_one = Number(num_one);
			var nilai_two = Number(num_two);
			m.reply(`${nilai_one / nilai_two}`);
		}
	}
};