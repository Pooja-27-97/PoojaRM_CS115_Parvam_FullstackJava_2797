package com.datatypes;

import java.util.Arrays;

public class NonPrimitive {

	public static void main(String[] args) {
		String name = "Ryomen Sukuna";
		System.out.println("My name is " + name);
		
		int[] arr = {2,5,8,7,9};
		System.out.println("Array values: " + Arrays.toString(arr));
		
		System.out.println("Using for loop");
		for(int i=0 ; i<5 ; i++) {
			System.out.println(arr[i]);
		}
	}
}
