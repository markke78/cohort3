package com.in28minutes.loops;

public class MyNumber {
	
	private int number;

	public MyNumber(int number) {
		this.number = number;
	}

	public boolean isPrime() {
		// 2 to number-1(<number)
		// How can check if a number is divisible by 2?
		if (number <= 3) {
			return number > 1;
		}
		for (int i = 2; i < number; i++) {
			if (number % i == 0) {
				return false;
			}
		}
		return true;
	}

}
