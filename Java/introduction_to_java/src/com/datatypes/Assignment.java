package com.datatypes;
import java.util.*;
public class Assignment {

	public static void main(String[] args) {
		
		Scanner sc = new Scanner(System.in);
		int studentId;
		System.out.println("Enter student ID:");
		studentId = sc.nextInt();
//		String studentName;
//		System.out.println("Enter student name:");
//		studentName = sc.toString();
		long marks;
		System.out.println("Enter student marks:");
		marks = sc.nextLong();
		
		System.out.println("Student details");
//		System.out.println("Name: " + studentName);
		System.out.println("ID: " + studentId);
		System.out.println("Marks: " + marks);

		
		int empID;
		System.out.println("Enter employee ID:");
		empID = sc.nextInt();
//		String empName;
//		System.out.println("Enter employee name:");
//		empName = sc.nextInt();
		double empSalary;
		System.out.println("Enter employee salary:");
		empSalary = sc.nextDouble();
//		String deptName;
//		System.out.println("Enter department name:");
//		deptName = sc.nextInt();
		
		System.out.println("Employee details");
//		System.out.println("Name: " + empName);
		System.out.println("ID: " + empID);
		System.out.println("Salary: " + empSalary);
//		System.out.println("Department name: " + deptName);
		sc.close();
	}

}
