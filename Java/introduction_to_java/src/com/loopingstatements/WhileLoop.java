package com.loopingstatements;
import java.util.Scanner;

public class WhileLoop {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		System.out.println("Enter number");
		int num;
		num = sc.nextInt();
		int i = 1;
		
		if(num <= 0) {
			System.out.println("Invalid number");
		}
		while(i <= num) {
			if(i % 2 == 0) {
				System.out.println(i + " is even");
			} else {
				System.out.println(i + " is odd");
			}
			i++;
		}
		sc.close();
	}
}
