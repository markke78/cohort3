package com.in28minutes.loops;

public class Max {
	public static int bigger(int... values) {
		int maximum = Integer.MIN_VALUE;
		for (int value : values) {
			if (value > maximum) {
				maximum = value;
			}
		}
		return maximum;
	}

	public static void main(String[] args) {
		System.out.println(bigger(-2, 1, -3, 4, -1, 2, 1, -5, 4));
	}
}
