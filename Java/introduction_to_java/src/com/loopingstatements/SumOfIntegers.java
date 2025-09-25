package com.loopingstatements;
import java.util.*;
public class SumOfIntegers {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.err.println("Enter the value");
        int num = sc.nextInt();
        int sum = 0;
        
        while (num > 0) {
            sum = sum + (num % 10);
            num /= 10;
        }
        System.err.println(sum);
    }
}