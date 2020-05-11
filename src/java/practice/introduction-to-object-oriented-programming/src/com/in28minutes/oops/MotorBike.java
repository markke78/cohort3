package com.in28minutes.oops;

public class MotorBike {
	// state
	private int speed;// member variable

	MotorBike() {// this is a no argument constructor. the default constructor is gone when the
					// constructor is assigned, so it can be created a no argument instance. It also
					// can assign a initial data.
		this(5);
	}

	MotorBike(int speed) {// assign a constructor, but if the constructor is not assigned, it will go
							// default constructor
		this.speed = speed;
	}

	public int getSpeed() {
		return speed;
	}

	public void setSpeed(int speed) {
		if (speed > 0) {
			this.speed = speed;
		}
	}

	public void increaseSpeed(int howMuch) {
		setSpeed(this.speed + howMuch);
	}

	public void decreaseSpeed(int howMuch) {
		setSpeed(this.speed - howMuch);
	}

	void start() {
		System.out.println("Bike Started");
	}
}
