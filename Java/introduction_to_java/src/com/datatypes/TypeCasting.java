package com.datatypes;

public class TypeCasting {
	public static void main(String[] args) {
		int num1 = 2797;
		long num2 = num1; // implicit
		System.out.println("num1: " + num1);
		System.out.println("num2: " + num2);

		long num3 = 98956;
		int num4 = (int) num3; // explicit
		System.out.println("num3: " + num3);
		System.out.println("num4: " + num4);

		// java-10  
		var var1 = "hello";
		var var2 = 27;
		System.out.println(var1 + " " + var2);
	}
}
