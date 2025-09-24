package com.class_objects;

class Car {
	String brand;
	int year;
	public void display() {
		System.out.println("Brand: " + brand);
		System.out.println("Year: " + year);
	}
}
public class ClassObject {
	public static void main(String[] args) {
		Car c1 = new Car();
		c1.brand = "Porsche";
		c1.year = 2025;
		c1.display();
	}
}
