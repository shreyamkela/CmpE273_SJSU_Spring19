package com.cmpe273;

import java.util.HashSet;

public class Collections {
	
	HashSet<String> matchCourses = new HashSet<String>();
	
	public boolean match(String matchThis) {
		matchCourses.add("CmpE 285");
		matchCourses.add("CmpE 273");
		matchCourses.add("CmpE 275");
		return matchCourses.contains(matchThis);
	}
	
	public static void main(String args[]) { // If the main is not public then we cannot run main by the shortcut keys in eclipse
		Collections newMatch = new Collections();
		boolean isMatch_1 = newMatch.match("CmpE 273");
		boolean isMatch_2 = newMatch.match("CmpE 281");
		System.out.println("Match: " + isMatch_1);
		System.out.println("Match: " + isMatch_2);
	}


}

