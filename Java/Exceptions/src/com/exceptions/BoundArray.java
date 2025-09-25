package com.exceptions;

import java.util.Arrays;
import java.util.Scanner;

public class BoundArray {

	public static void main(String[] args) {
		System.out.println("Program Started");
		Scanner sc = new Scanner(System.in);
		int[] arr = new int[5];
		
		for(int i=0 ; i<5 ; i++) {
			arr[i] = sc.nextInt();
		}
		
		System.out.println("Array: " + Arrays.toString(arr));
		try {
			System.out.println("6th Index: " + arr[6]);
		} catch (ArrayIndexOutOfBoundsException e) {
			System.out.println(e.getMessage());
		}
		sc.close();
		
		System.out.println("Program Ended");
	}

}
