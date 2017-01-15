import classNames	from 'classnames';
import {parseMods}	from '../utils';

export default function bemclassnames (blockName, elementName, ...mods) {

	if (!blockName)
		return '';

	if (!elementName)
		return `${blockName}`.toLowerCase();

	const elementNameClassName = `${blockName}__${elementName}`.toLowerCase();

	if (!mods || !mods.length)
		return elementNameClassName;

	const modArr = parseMods(mods);

	const classList = [elementNameClassName].concat(modArr.map(mod => `${elementNameClassName}_${mod}`.toLowerCase()));

	return classNames.apply({}, classList);
}