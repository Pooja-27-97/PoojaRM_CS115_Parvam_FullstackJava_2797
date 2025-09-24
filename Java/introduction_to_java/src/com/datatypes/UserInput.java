package com.datatypes;
import java.util.*;
public class UserInput {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int age;
		System.out.println("Enter your age");
		age = sc.nextInt();
		System.out.println("Your age is " + age);
		System.out.println();
		
//		int num = sc.nextInt();
//		System.out.println("Entered number is " + num);
		
		long phoneNum;
		System.out.println("Enter your phone number");
		phoneNum = sc.nextLong();
		System.out.println("Your phone number is " + phoneNum);
		
		sc.close();
	}

}
