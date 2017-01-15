import {Unit, Test}	from 'unit-kuznetsov';
import bemClassNames	from 'bemclassnames';

const unique = new Unit (bemClassNames, 'Tests for filtering nonunique modificators');

export default unique
					.addTest(new Test({
						args: [
						'block',
						'element',
						'mod1',
						'mod1'],
						method: 'isEqual',
						expectation: 'block__element block__element_mod1'
					})).addTest(new Test({
						args: [
						'block',
						'element',
						'mod1',
						'mod1',
						'mod2'
						],
						method: 'isEqual',
						expectation: 'block__element block__element_mod1 block__element_mod2'
					})).addTest(new Test({
						args: [
						'block',
						'element',
						'mod1',
						'mod1',
						'mod2',
						{mod2: true, mod3: true},
						['mod3', 'mod4', 'mod5'],
						{mod4: false}
						],
						method: 'isEqual',
						expectation: 'block__element block__element_mod1 block__element_mod2 block__element_mod3 block__element_mod4 block__element_mod5'
					}));
