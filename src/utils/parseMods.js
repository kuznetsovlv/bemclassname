/**
 * Parses objects and arrays of modificators.
 * @param {object or array of *} obj = {} - array of modificators or object with keys named as modificators. In csae of object if !!obj[key] === true, key will be added into modificator's list else will not.
 * @returns {array of string} - array of parsed modificators.
 */
function parseObj (obj = {}) {
	if (obj instanceof Array)
		return parseMods(obj);

	let result = [];

	for(let key in obj) {
		if (!key || !obj.hasOwnProperty(key) || !obj[key])
			continue;

		if (typeof obj[key] !== 'object')
			result.push(key.toLowerCase());

		result = result.concat(parseObj(obj[key]));
	}

	return result;
}

/**
 * Parses modificator's array
 * @param {array of *} mods = [] - array of modificators.
 * @returns {array of string} - array of parsed modificators.
 */
export default function parseMods (mods = []) {
	let result = [];

	mods.forEach((mod, i) => {
		if (!mod)
			return;
		
		if (typeof mod !== 'object')
			result.push(`${mod}`.toLowerCase());
		else
			result = result.concat(parseObj(mod));
	});

	return result;
}
