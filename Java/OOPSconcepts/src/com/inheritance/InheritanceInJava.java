package com.inheritance;

class Animal {
	public void eat() {
		System.out.println("Animal is eating");
	}
}
class Dog extends Animal {
	@Override
	public void eat() { //override the parent's method
		System.out.println("Dog is eating");
	}
	public void walk() {
		System.out.println("Dog is walking");
	}
}
public class InheritanceInJava {

	public static void main(String[] args) {
		Dog d1 = new Dog();
		d1.eat();
		d1.walk();
	}

}
