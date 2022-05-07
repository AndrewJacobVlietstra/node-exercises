const Person = require('./person');

const andrew = new Person('Andrew', 26);

console.log(andrew);
andrew.greeting();

function sayHello() {
  return console.log(`Hey there ${this.name}`);
};

sayHello.call(andrew);