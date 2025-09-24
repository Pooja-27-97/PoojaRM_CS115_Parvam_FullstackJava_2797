package com.condtitonalStatements;

import java.util.Scanner;

public class CheckNumber {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int num;
		num = sc.nextInt();
		if (num == 0) {
			System.out.println("Number is zero");
		} else if (num < 0) {
			System.out.println("Negative number");
		} else {
			if (num % 2 == 0) {
				System.out.println("Even number");
			} else {
				System.out.println("Odd number");
			}
		}
		sc.close();
	}

}
