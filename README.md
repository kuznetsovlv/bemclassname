# BEMclassnames

A simple javascript utility for conditionally creating classNames in BEM notation.

## [Content.](#user-content-content "Conten")
- [GitHub.](#user-content-github "Link to GitHub repository")
- [Install.](#user-content-install "Install")
- [Usage.](#user-content-usege "Usage")
- [Support.](#user-content-support "Supported brousers")
- [License](#user-content-license "License")

##GitHub.
[Progect on GitHub.](https://github.com/kuznetsovlv/bemclassname "Link to GitHub repository")

## Install.
```bash
npm install bemclassnames --save-dev
```
##Usage.
The `BEMClassNames` function takes any number of arguments which can be a string, object or array. The argument `blockName` must be a string is a block's name, `elementName` string optional argument is the block's element's name. All other optional elements may be any of a string, object or array and defines set of modificators. In case of object if it's key s falsy, it won't be included in the output. Dublicated or falsy modificators won't be included in the output too.
```javascript
	import BEMclassnames from 'bemclassnames';
	
	BEMClassNames(''); // => ''
	BEMClassNames('blockName'); // => 'blockName'
	BEMClassNames('blockName', ''); // => 'blockName'
	BEMClassNames('blockName', 'elementName'); // => 'blockName__elementName'
	BEMClassNames('blockName', 'elementName', 'mod1'); // => 'blockName__elementName blockName__elementName_mod1'
	BEMClassNames('blockName', 'elementName', 'mod1', ''); // => 'blockName__elementName blockName__elementName_mod1'
	BEMClassNames('blockName', 'elementName', 'mod1', 'mod2'); // => 'blockName__elementName blockName__elementName_mod1 blockName__elementName_mod2'
	BEMClassNames('blockName', 'elementName', ['mod1', 'mod2']); // => 'blockName__elementName blockName__elementName_mod1 blockName__elementName_mod2'
	BEMClassNames('blockName', 'elementName', 'mod1', {mod2: true}); // => 'blockName__elementName blockName__elementName_mod1 blockName__elementName_mod2'
	BEMClassNames('blockName', 'elementName', ['mod1', {mod2: true}]); // => 'blockName__elementName blockName__elementName_mod1 blockName__elementName_mod2'
	BEMClassNames('blockName', 'elementName', 'mod1', {mod2: false}); // => 'blockName__elementName blockName__elementName_mod1'
	BEMClassNames('blockName', 'elementName', {mod1: true, mod2: true}); // => 'blockName__elementName blockName__elementName_mod1 blockName__elementName_mod2'
	BEMClassNames('blockName', 'elementName', {mod1: false, mod2: true}); // => 'blockName__elementName blockName__elementName_mod2'
	BEMClassNames('blockName', 'elementName', 'mod1', 'mod2', 'mod1'); // => 'blockName__elementName blockName__elementName_mod1 blockName__elementName_mod2'
	BEMClassNames('blockName', 'elementName', 'mod1', {mod1: false, mod2: true}); // => 'blockName__elementName blockName__elementName_mod1 blockName__elementName_mod2'
	BEMClassNames('blockName', 'elementName', 'mod1', {mod1: false, mod2: true}, ['mod2', 'mod3', {mod4: true}]); // => 'blockName__elementName blockName__elementName_mod1 blockName__elementName_mod2 blockName__elementName_mod3 blockName__elementName_mod4'
	BEMClassNames('blockName', 'elementName', {mod1: false}, 'mod1'); // => 'blockName__elementName blockName__elementName_mod1'
```

##Support.
Supported browsers _IE9+_.

##License
[MIT](./LICENSE "MIT") Copyright (c) 2017 Kuznetsov Leonid.
