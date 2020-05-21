package com.in28minutes.loops;

import java.util.ArrayList;

public class Subarray {
	public static int sum(int... values) {
		int sum;
		ArrayList<Integer> eachSums = new ArrayList<Integer>();
		for (int i = 0; i < values.length; i++) {
			for (int j = 0; j < values.length; j++) {
				sum = 0;
				for (int k = i; k <= j; k++) {
					sum = sum + values[k];
					eachSums.add(sum);
				}
			}
		}

		int maximum = Integer.MIN_VALUE;
		for (int eachSum : eachSums) {
			if (eachSum > maximum) {
				maximum = eachSum;
			}
		}
		return maximum;
	}

	public static void main(String[] args) {
		System.out.println(sum(-2, 1, -3, 4, -1, 2, 1, -5, 4));
	}

}
