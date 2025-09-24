package com.functions;

public class FunctionInJava {
	public int add(int num1, int num2) {
		return num1+num2;
	}

	public void sub(int n1, int n2) {
		int res = n1 - n2;
		System.out.println("Result: " + res);
	}
	
	public String SayHello() {
		return "Hello!";
	}

	public void greet() {
		System.out.println("Hello World");
	}

	public static void main(String[] args) {
		FunctionInJava obj = new FunctionInJava();
		
		int res1 = obj.add(27, 97);
		System.out.println("Result: " + res1);
		
		obj.sub(152, 25);
		obj.greet();
		System.out.println(obj.SayHello() + "This is Functions in java");
	}
}