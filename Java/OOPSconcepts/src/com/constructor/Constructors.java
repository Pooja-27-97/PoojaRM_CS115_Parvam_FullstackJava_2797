package com.constructor;

class GrandParent {
	public GrandParent() {
		super();
		System.out.println("GrandParent Constructor");
	}
}

class Person extends GrandParent{
	public Person() {
		super();
		System.out.println("Person Constructor");
	}
}

class Student extends Person{
	public int id;
	public String name;
	public Student(int id, String name) {
		this.id = id;
		this.name = name;
	}
	public Student(int id) {
		super();
		this.id = id;
	}
	public Student(String name) {
		this.name = name;
	}
	public Student() {
		System.out.println("Default constructor");
	}
}

public class Constructors {

	public static void main(String[] args) {
		Student s1 = new Student(101, "Muzan");
		Student s2 = new Student(102);
		Student s3 = new Student("Sukuna");
//		Student s4 = new Student();
		System.out.println("First Student Name: " + s1.name);
		System.out.println("First Student ID: " + s1.id);
		System.out.println("Second Student Name: " + s2.name);
		System.out.println("Second Student id: " + s2.id);
		System.out.println("Third Student Name: " + s3.name);
		System.out.println("Third Student id: " + s3.id);
	}

}
