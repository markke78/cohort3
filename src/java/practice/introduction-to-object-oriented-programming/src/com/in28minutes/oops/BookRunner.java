package com.in28minutes.oops;

public class BookRunner {

	public static void main(String[] args) {
		Book artOfComputerProgramming = new Book();
		Book effectiveJava = new Book();
		Book cleanCode = new Book();

		artOfComputerProgramming.setNoOfCopies(90);
		System.out.println(artOfComputerProgramming.getNoOfCopies());

		effectiveJava.setNoOfCopies(50);
		System.out.println(effectiveJava.getNoOfCopies());

		cleanCode.setNoOfCopies(45);
		System.out.println(cleanCode.getNoOfCopies());

	}


}
