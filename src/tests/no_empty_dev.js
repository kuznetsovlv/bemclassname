import {Unit, Test}	from 'unit-kuznetsov';
import bemClassNames	from '../index';

const noEmpty = new Unit (bemClassNames, 'Tests for filtering empty items');

export default noEmpty
						.addTest(new Test({args: [''], method: 'isEqual', expectation: ''}))
						.addTest(new Test({args: ['', 'element'], method: 'isEqual', expectation: ''}))
						.addTest(new Test({args: ['', 'element', 'mod'], method: 'isEqual', expectation: ''}))
						.addTest(new Test({args: ['', '', 'mod'], method: 'isEqual', expectation: ''}))
						.addTest(new Test({args: [], method: 'isEqual', expectation: ''}))
						.addTest(new Test({
							args: [
								'block',
								'element',
								'mod1',
								''
							],
							method: 'isEqual',
							expectation: 'block__element block__element_mod1'
						}))
						.addTest(new Test({
							args: [
								'block',
								'element',
								'mod1',
								'',
								'mod2',
								null,
								0,
								'mod3'
							],
							method: 'isEqual',
							expectation: 'block__element block__element_mod1 block__element_mod2 block__element_mod3'
						}))
						.addTest(new Test({
							args: [
								'block',
								'element',
								''
							],
							method: 'isEqual',
							expectation: 'block__element'
						}))
						.addTest(new Test({
							args: [
								'block',
								'element',
								'mod1',
								'',
								{'': true}
							],
							method: 'isEqual',
							expectation: 'block__element block__element_mod1'
						}));
