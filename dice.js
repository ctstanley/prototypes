///Dice Takes numberOfSides 
////add roll method that returns 1 up to numberOfSides
////roll records returned side 
function Dice  (numberOfSides) {
	this.numberOfSides = numberOfSides;
	this.Roll = function () {
		side = Math.floor(Math.random()*(this.numberOfSides) + 1);
		this.lastRoll = side;
		return side;
	this.lastRoll = 0;
	};
}