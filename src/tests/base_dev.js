import {Unit, Test}	from 'unit-kuznetsov';
import bemClassNames	from 'bemclassnames';

const base = new Unit (bemClassNames, 'Base tests');

export default base
						.addTest(new Test({args: ['block'], method: 'isEqual', expectation: 'block'}))
						.addTest(new Test({args: ['BLOCK'], method: 'isEqual', expectation: 'block'}))
						.addTest(new Test({args: ['block', 'element'], method: 'isEqual', expectation: 'block__element'}))
						.addTest(new Test({args: ['bLock', 'ELEMENT'], method: 'isEqual', expectation: 'block__element'}))
						.addTest(new Test({args: ['block', 'element', 'mod1'], method: 'isEqual', expectation: 'block__element block__element_mod1'}))
						.addTest(new Test({args: ['block', 'element', 'moD1'], method: 'isEqual', expectation: 'block__element block__element_mod1'}))
						.addTest(new Test({args: ['bloCk', 'element', 'mod1', 'mOd2'], method: 'isEqual', expectation: 'block__element block__element_mod1 block__element_mod2'}))
						.addTest(new Test({args: ['bloCk', 'element', ['mod1', 'mOd2']], method: 'isEqual', expectation: 'block__element block__element_mod1 block__element_mod2'}))
						.addTest(new Test({
							args: [
							'bloCk',
							'element',
							['mod1', 'mOd2'],
							'mod3',
							['mod4', 'mod5', 'mod6']
							],
							method: 'isEqual',
							expectation: 'block__element block__element_mod1 block__element_mod2 block__element_mod3 block__element_mod4 block__element_mod5 block__element_mod6'
						}))
						.addTest(new Test({
							args: [
							'block',
							'element',
							{mod1: true, mod2: false, mOd3: 1}
							],
							method: 'isEqual',
							expectation: 'block__element block__element_mod1 block__element_mod3'}))
						.addTest(new Test({
							args: [
							'block',
							'element',
							{mod1: true, mod2: false, mOd3: 1, mod4: ['mod5', {mod6: true}]},
							'mod7',
							[{mod8: true}]
							],
							method: 'isEqual',
							expectation: 'block__element block__element_mod1 block__element_mod3 block__element_mod5 block__element_mod6 block__element_mod7 block__element_mod8'}));
