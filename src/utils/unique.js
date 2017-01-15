/**
 * Converts array to array without dublicated elements.
 * @param {array} arr - initial array
 * @returns {array} - array without dublicated elements.
 */
export default function unique (arr = []) {
	const result = [];

	arr.forEach((mod) => {
		if (!~result.indexOf(mod))
			result.push(mod);
	});

	return result;
}
