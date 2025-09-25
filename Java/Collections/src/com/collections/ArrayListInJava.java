package com.collections;

import java.util.ArrayList;
import java.util.List;

public class ArrayListInJava {
	public static void main(String[] args) {
		//without generics
		List l1 = new ArrayList();
		l1.add(27);
		l1.add("Hello");
		l1.add('J');
		l1.add(23);
		l1.add(27);
		l1.add(27.97);
		System.out.println(l1);
		String name = (String)l1.get(1);//type cast
		System.out.println(name);
		
		
		//with generics
		List<Integer> int1 = new ArrayList<Integer>();
		int1.add(27);
		int1.add(162);
		int1.add(468);
		
		System.out.println(int1);
		Integer index = int1.get(1);
		System.out.println(index);
	}

}
