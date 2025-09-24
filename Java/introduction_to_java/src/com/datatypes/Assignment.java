package com.datatypes;
import java.util.*;
public class Assignment {

	public static void main(String[] args) {
		
		Scanner sc = new Scanner(System.in);
		int studentId;
		System.out.print("Enter student ID: ");
		studentId = sc.nextInt();
		String studentName;
		System.out.print("Enter student name: ");
		studentName = sc.next();
		long marks;
		System.out.print("Enter student marks: ");
		marks = sc.nextLong();
		System.out.println();

		
		int empID;
		System.out.print("Enter employee ID: ");
		empID = sc.nextInt();
		String empName;
		System.out.print("Enter employee name: ");
		empName = sc.next();
		double empSalary;
		System.out.print("Enter employee salary: ");
		empSalary = sc.nextDouble();
		String deptName;
		System.out.print("Enter department name: ");
		deptName = sc.next();

		System.out.println();
		System.out.println("--------Student details--------");
		System.out.println("Name: " + studentName);
		System.out.println("ID: " + studentId);
		System.out.println("Marks: " + marks);
		System.out.println("-------------------------------");
		
		System.out.println("----------Employee details-----------");
		System.out.println("Name: " + empName);
		System.out.println("ID: " + empID);
		System.out.println("Salary: " + empSalary);
		System.out.println("Department name: " + deptName);
		System.out.println("-------------------------------------");
		sc.close();
	}

}
