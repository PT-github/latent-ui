/*
 * @Author: PT
 * @Date: 2020-04-20 20:30:52
 * @LastEditors: PT
 * @LastEditTime: 2020-05-09 23:25:46
 * @Description: file content
 */
module.exports = {
	"env": {
		"browser": true,
		"es6": true,
		"node": true,
		"amd": true
	},
	"extends": [
		"eslint:recommended",
		"plugin:vue/essential"
	],
	"globals": {
		"Atomics": "readonly",
		"SharedArrayBuffer": "readonly"
	},
	"parserOptions": {
		"parser": "babel-eslint",
		"ecmaVersion": 2018,
		"sourceType": "module"
	},
	"plugins": [
		"vue"
	],
	"rules": {
		"eqeqeq": ["error", "always"],
		"no-multi-spaces": "error",
		"no-empty": 0,
		// allow space-before-function-paren
		"space-before-function-paren": ["error", "always"], // 函数[匿名函数]名 括号
		"semi": ["error", "never"], // 无分号
		"quotes": ["error", "single"] // 单引号
	}
};