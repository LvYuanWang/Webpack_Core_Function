import common from './commonjs';
const es6a = require('./es6a');
import $ from 'jquery';

console.log(common);
console.log(es6a.a, es6a.b, es6a.default);

console.log(common.version, common.description);

console.log($);