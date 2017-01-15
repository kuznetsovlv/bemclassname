import {Unit, Test}	from 'unit-kuznetsov';
import bemClassNames	from '../index';

const noEmpty = new Unit (bemClassNames, 'Tests for filtering empty items');

export default noEmpty
						.addTest(new Test({args: [''], method: 'isEqual', expectation: ''}))
						.addTest(new Test({args: ['', 'element'], method: 'isEqual', expectation: ''}))
						.addTest(new Test({args: ['', 'element', 'mod'], method: 'isEqual', expectation: ''}))
						.addTest(new Test({args: ['', '', 'mod'], method: 'isEqual', expectation: ''}))
						.addTest(new Test({args: [], method: 'isEqual', expectation: ''}));
