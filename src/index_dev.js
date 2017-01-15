import base	from './tests/base';
import noEmpty	from './tests/no_empty';
import unique	from './tests/unique';

[
	base,
	noEmpty,
	unique
].forEach(tests => tests.drawResult(true));
	