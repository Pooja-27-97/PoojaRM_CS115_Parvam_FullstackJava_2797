package com.encapsulation;
class Student {
	private String name;
	private int id;
	private int age;
	private int roll;
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	public int getRoll() {
		return roll;
	}
	public void setRoll(int roll) {
		this.roll = roll;
	}
	@Override
	public String toString() {
		return "Student [name=" + name + ", id=" + id + ", age=" + age + ", roll=" + roll + "]";
	}
}
public class EncapsulationInJava {

	public static void main(String[] args) {
		Student s1 = new Student();
		s1.setName("Ramil");
		s1.setId(2);
		s1.setAge(27);
		s1.setRoll(1025);
		System.out.println(s1);;
	}

}
