package com.exceptions;

import java.io.FileNotFoundException;
import java.io.FileReader;

public class CompileTimeException {
	public static void main(String[] args) {
		try {
			FileReader r1 = new FileReader("filenotexist.txt");
		} catch (FileNotFoundException e) {
//			e.printStackTrace();
			System.out.println(e.getMessage());
		}
	}
}