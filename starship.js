function StarShip (model, ownerName) {
	this.model = model;
	this.ownerName = ownerName;
	this.topSpeed = 0;
	this.currentSpeed = 0;
}

StarShip.prototype.setTopSpeed = function (newTop) {
	this.topSpeed = newTop;
};

StarShip.prototype.getTopSpeed = function () {
	return this.topSpeed;
};

StarShip.prototype.accelerateTo = function (speed) {
	if (speed < this.topSpeed) {
		this.currentSpeed = speed;
	}
	
	else {
	return "We can not go into the plaid!";
	};
};

var PlanetExpress = new StarShip("selfDrive", "Farnsworth");
PlanetExpress.setTopSpeed(1000000000);
PlanetExpress.getTopSpeed();
PlanetExpress.accelerateTo(10000000000);
PlanetExpress.accelerateTo(99);