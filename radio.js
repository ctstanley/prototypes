function Radio (ownerName, signalType) {
    this.ownerName = ownerName;
    this.signalType = signalType;
    this.station = 0;
    this.memory = 0;
    this.memoryBand = 0;
}

Radio.prototype.setStation = function (num) {
    if (this.signalType === "AM" && num <= 1705 && num >= 535) {
       this.station = num;
    }
    else if (this.signalType === "FM" && num <= 108 && num >= 88 ){
       this.station = num;
    }
    else {
       alert("Wrong Jams!");
    };
};
Radio.prototype.listen = function () {
    if (this.signalType == "FM") {
        return "clear music"
    }
    else if (this.signalType == "FM"){
        return "distorted music"
    }
    else {
        console.log("off")
    }
};
   
Radio.prototype.toggleSignal = function (band, station) {
    this.memory = this.signalType;
    this.memoryBand = this.station
    this.signalType = band;
    this.setStation(station);
};