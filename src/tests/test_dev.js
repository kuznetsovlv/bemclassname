import {Unit, Test}	from 'unit-kuznetsov';
import bemClassName	from '../index';

const testUnit = new Unit (bemClassName, 'Check "exist"');

export default testUnit.addTest(new Test({arg: 'test', method: 'exist'}));
