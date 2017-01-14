import classNames	from 'classnames';
import {parseMods}	from '../utils';

export default function bemclassnames (block, element, ...mods) {

	if (!element)
		return `${block}`.toLowerCase();

	const elementClassName = `${block}__${element}`.toLowerCase();

	if (!mods || !mods.length)
		return elementClassName;

	const modArr = parseMods(mods);

	const classList = [elementClassName].concat(modArr.map(mod => `${elementClassName}_${mod}`.toLowerCase()));

	return classNames.apply({}, classList);
}