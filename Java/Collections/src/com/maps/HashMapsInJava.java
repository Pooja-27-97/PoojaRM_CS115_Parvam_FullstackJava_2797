package com.maps;

import java.util.HashMap;
import java.util.Map;

public class HashMapsInJava {

	public static void main(String[] args) {
		Map<Integer, String> map = new HashMap<Integer, String>();
		map.put(1,  "Muzan");
		map.put(2, "Sukuna");
		map.put(3, "Ametino");
		System.out.println(map);
		System.out.println(map.get(1));
	}
}