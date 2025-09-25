package com.setinterface;

import java.util.HashSet;
import java.util.Set;

public class SetInterface {

	public static void main(String[] args) {
		Set<Integer> s1 = new HashSet<Integer>();
		s1.add(24);
		s1.add(24);
		s1.add(27);
		s1.add(212);
		s1.add(27);
		System.out.println(s1);
	}

}
