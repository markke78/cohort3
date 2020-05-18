package com.in28minutes.arrays;

import java.math.BigDecimal;

public class StudentRunner {

	public static void main(String[] args) {
		Student student = new Student("Ranga", new int[] { 97, 98, 100 });
		String name = student.getName();
		System.out.println("student name: " + name);
		int number = student.getNumberOfMasks();
		System.out.println("number of marks: " + number);
		int sum = student.getTotalSumOfMarks();
		System.out.println("sum of marks: " + sum);
		int maximumMark = student.getMaximumMark();
		System.out.println("maximum mark: " + maximumMark);
		int minimumMark = student.getMinimumMarks();
		System.out.println("minimum mark: " + minimumMark);
		BigDecimal average = student.getAverageMarks();
		System.out.println("average mark:" + average);
	}

}
