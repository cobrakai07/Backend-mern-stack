const lib= require('./sumAndDiff.js');
const fs=require('fs');

const t1=performance.now();
let data=fs.readFileSync('demo1.txt','utf-8');
console.log(data);
const t2=performance.now();
console.log(`Performance of synchronous file read: ${t2-t1}`);
////
const t3=performance.now();
fs.readFile('demo2.txt','utf-8',
            (err,data)=>{console.log(data);}
            );
const t4=performance.now();
console.log(`Performance of Asynchronous file read: ${t4-t3}`);
////

console.log(lib.fun(2,3));
console.log(lib.sum(9,5));
console.log(lib.diff(3,2));

//to use ES6 u have to modify package.json file//
//currently we are using CJS//common javaSript//