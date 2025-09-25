package com.abstraction;

class Car implements Vehicle 
{
	@Override
	public void start() {
		System.out.println("Start Car");
	}

	@Override
	public void stop() {
		System.out.println("Stop Car");
	}
	
}
public class AbstractionInterface {

	public static void main(String[] args) {
		Car c1 = new Car();
		c1.start();
		c1.stop();
		Vehicle.display();
	}
}