package com.functions;

public class FunctionInJava {
	public int add(int num1, int num2) {
		return num1+num2;
	}

	public void sub(int n1, int n2) {
		int res = n1 - n2;
		System.out.println("Result: " + res);
	}
	
	public void greet() {
		System.out.println("Hello World");
	}
	
	public String SayHello() {
		return "Hello!";
	}
	public static void main(String[] args) {
		FunctionInJava obj = new FunctionInJava();
		
		int res1 = obj.add(27, 97);
		System.out.println("Result: " + res1);
		
		int res2 = obj.add(152, 568);
		System.out.println("Result: " + res2);
	}

}
