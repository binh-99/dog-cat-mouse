var Dog = require('./Dog');
var Cat = require('./Cat');
var Mouse = require('./Mouse');

var tom = new Cat('Tom');
var dog = new Dog('Vang');
var mouse = new Mouse('Micky');

try {
	tom.eat(dog);
} catch (error) {
	console.log('Error while cat eating a dog');
}

console.log(tom);