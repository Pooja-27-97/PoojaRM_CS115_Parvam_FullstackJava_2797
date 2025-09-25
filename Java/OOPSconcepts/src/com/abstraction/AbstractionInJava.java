package com.abstraction;
abstract class Shape {
	abstract void draw();
	public void display() {
		System.out.println("Display method");
	}
}

class Circle extends Shape {

	@Override
	void draw() {
		System.out.println("Drawing method");
	}
}

public class AbstractionInJava {

	public static void main(String[] args) {
		Circle c1 = new Circle();
		c1.draw();
		c1.display();
	}

}
