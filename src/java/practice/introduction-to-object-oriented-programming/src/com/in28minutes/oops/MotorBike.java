package com.in28minutes.oops;

public class MotorBike {
	// state
	private int speed;// member variable
	


	public int getSpeed() {
		return speed;
	}

	public void setSpeed(int speed) {
		this.speed = speed;
		System.out.println(speed);
		System.out.println(this.speed);

	}

	void start() {
		System.out.println("Bike Started");
	}
}
