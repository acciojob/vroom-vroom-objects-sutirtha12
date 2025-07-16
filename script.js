// Complete the js code
class Car {
	constructor(make, model){
	this.make=make
	this.model=model
	}
	getMakeModel(){
		return `${this.make} ${this.model}`
	}
}

class SportsCar extends Car {
	constructor(make, model, topSpeed){
		super(make, model)
		this.speed=topspeed
	}
	getTopSpeed(){
		return this.speed
	}
}

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
