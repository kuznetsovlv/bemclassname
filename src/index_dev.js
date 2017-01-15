import base	from './tests/base';
import noEmpty	from './tests/no_empty';

[
	base,
	noEmpty
].forEach(tests => tests.drawResult());
	