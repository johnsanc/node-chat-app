const moment = require('moment');

// let date = new Date();
// console.log(date);

let someTimeStamp = moment().valueOf();
console.log(someTimeStamp);

let date = moment();
// console.log(date.format('MMM Do, YYYY'));
console.log(date.format('h:mm a'));