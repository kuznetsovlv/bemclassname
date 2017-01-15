import classNames	from 'classnames';
import {parseMods, unique}	from '../utils';

/**
 * Creates BEM's classNames
 * @param {string} blockName - name of block.
 * @param {string} [elementName] - name of element.
 * @param {array of *} [...mods] - modificators.
 * @returns {string} - BEM's classNames.
 */
export default function bemclassnames (blockName, elementName, ...mods) {

	if (!blockName)
		return '';

	if (!elementName)
		return `${blockName}`.toLowerCase();

	const elementNameClassName = `${blockName}__${elementName}`.toLowerCase();

	if (!mods || !mods.length)
		return elementNameClassName;

	const modArr = parseMods(mods);

	const classList = [elementNameClassName].concat(unique(modArr.map(mod => `${elementNameClassName}_${mod}`.toLowerCase())));

	return classNames.apply({}, classList);
}