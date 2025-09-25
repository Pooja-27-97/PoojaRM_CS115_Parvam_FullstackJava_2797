package com.abstraction;

public interface Vehicle {
	abstract void start();
	void stop();
	public static void display() {
		System.out.println("Display method");
	}
}