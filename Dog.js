var chalk = require('chalk')

function Dog(name){
	this.name = name,
	this.stomach = [];
};

Dog.prototype.sayHi = function() {
	console.log("Hi, I'm a dog. My name is " + chalk.red(this.name));
};

module.exports = Dog;