function parseObj (obj = {}) {
	if (obj instanceof Array)
		return parseMods(obj);

	let result = [];

	for(let key in obj) {
		if (!obj.hasOwnProperty(key) || !obj[key])
			continue;

		if (typeof obj[key] !== 'object')
			result.push(key.toLowerCase());

		result = result.concat(parseObj(obj[key]));
	}

	return result;
}

export default function parseMods (mods = []) {
	let result = [];

	mods.forEach((mod, i) => {
		if (typeof mod !== 'object')
			result.push(`${mod}`.toLowerCase());
		else
			result = result.concat(parseObj(mod));
	});

	return result;
}
