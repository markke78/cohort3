package com.in28minutes.primitive.datatypes;

public class MyChar {

	private char ch;

	public MyChar(char ch) {
		this.ch = ch;
	}

	public boolean isVowel() {
		// 'a','e','i','o','u' or Capitals
		if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u') {
			return true;
		}
		if (ch == 'A' || ch == 'E' || ch == 'I' || ch == 'O' || ch == 'U') {
			return true;
		}
		return false;
	}

	public boolean isDigit() {
		// ch>= 48 && ch <= 57, that means (int)'0' to (int)'9'
		if (ch >= 48 && ch <= 57) {
			return true;
		}
		return false;
	}

	public boolean isAlphabet() {
		// 'A'=65,'Z'=90, 'a'=97, 'z'=122
		if (ch >= 65 && ch <= 90 || ch >= 97 && ch <= 122) {
			return true;
		}
		return false;
	}

	public boolean isConsonant() {
		// not vowel
		if (isAlphabet() && !isVowel()) {
			return true;
		}

		return false;
	}

	public void printLowerCaseAlphabets() {
		if (isAlphabet()) {
			System.out.println(Character.toLowerCase(ch));
		}

	}

	public static void printUpperCaseAlphabets() {
		for (char ch = 'A'; ch <= 'Z'; ch++) {
			System.out.println(ch);
		}
		
	}

}
