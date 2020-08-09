function Mouse(name){
	this.name = name,
	this.dead = false;
};

Mouse.prototype.die = function() {
	this.dead = true;
};

var mouse1 = new Mouse('Jerry');