console.log('Hello World!');
console.log(24 + 1);
//Warning:
console.warn('This is a warning');
//Error:
console.error('This is an error');
//Table:
console.table({ 'hello': 'yo', 'hello2': 'hi' });
//Counting Time:
console.time('time1');
console.log('example');
console.log('example');
console.log('example');
console.log('example');
console.timeEnd('time1');
//Assertion:
console.assert(24 > 122, 'this is an assertion');
//Group:
console.group('group title');
console.log('group item1');
console.log('group item2');
console.log('group item3');
console.groupEnd('group title');
//Custom Console:
let spacing = '8px';
let css = `padding: ${spacing}; background-color: none; color: blue ; font-style:
italic; border: 1px solid black dotted; font-size: 2em;`;
console.log('%c Sarthak Deora', css);