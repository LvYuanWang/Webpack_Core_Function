import a from './a.js';
import $ from 'jquery'; // webpack会将jquery中所有的内容打包到main.js中，所以最后这里引入的jquery是不参与运行的
console.log($);

console.log(a);
console.log('index.js file');