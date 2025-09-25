package com.exceptions;

import java.util.Scanner;

public class DivisioByZero {
	public static void main(String[] args) {
		System.out.println("Program started");
		Scanner sc = new Scanner(System.in);
		int num1, num2;
		num1 = sc.nextInt();
		num2 = sc.nextInt();
		int res = 0;
		
		try {
			res = num1 / num2;
		} catch (ArithmeticException e) {
			System.out.println(e.getMessage());
		}
		
		System.out.println("Result: " + res);
		System.out.println("Program Ended");
		sc.close();
	}
}
