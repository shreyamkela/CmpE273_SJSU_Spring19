package com.cmpe273;

import java.util.HashSet;

public class generics {
	
	// Generics in Java are similar to templates in C++
	
	HashSet<String> stringLicenses = new HashSet<String>();	
	HashSet<Integer> intLicenses = new HashSet<Integer>();	
	public <E> boolean checkLicense(E check) {
		
		stringLicenses.add("A739GH");
		stringLicenses.add("Y7E3UI");
		intLicenses.add(898746);
		intLicenses.add(135957);
		intLicenses.add(423162);
		
		if(check instanceof String && stringLicenses.contains(check)) { // instanceof checks the type of variable
			return true;
		} else if(check instanceof Integer && intLicenses.contains(check)) {
			return true;
		} else {
			return false;
		}
	}
	
	public static void main(String args[]) { 
		generics license = new generics();
		boolean checkThis_1 = license.checkLicense("Y7E3UI");
		boolean checkThis_2 = license.checkLicense("R983YC");
		boolean checkThis_3 = license.checkLicense(135957);
		boolean checkThis_4 = license.checkLicense(841135);
		System.out.println(checkThis_1);
		System.out.println(checkThis_2);
		System.out.println(checkThis_3);
		System.out.println(checkThis_4);

	}
}
