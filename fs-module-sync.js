const {readFileSync, writeFileSync}= require('fs');

const first = readFileSync('./content/first.txt','utf-8');
const seconds = readFileSync('./content/second.txt','utf-8');

console.log(first);

writeFileSync('./content/first.txt',
`Here is the result: ${first}, ${seconds}`
);
console.log(first);