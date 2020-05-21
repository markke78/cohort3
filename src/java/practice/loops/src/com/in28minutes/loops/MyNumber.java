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

	public int sumUptoN() {
		// 1+2+3+....+number
		int sum = 0;
		for (int i = 0; i <= number; i++) {
			sum = sum + i;
		}
		return sum;
	}


	public int sumOfDivisor() {
		int sum = 0;
		for (int i = 2; i < number; i++) {
			if (number % i == 0) {
				sum = sum + i;
			}
		}
		return sum;
	}

	public void printANumberTriangle() {
		for (int i = 1; i <= number; i++) {
			for (int j = 1; j <= i; j++) {
				System.out.print(j + " ");
			}
			System.out.println();
		}

	}

}
