package com.cmpe273;

public class arrays {

	public String getCourses() {
		
		String courses[] = {"CmpE 273", "CmpE 275", "CmpE 285"};
		return courses[1];
	}
	
	public static void main(String[] args) {
		arrays myCourses = new arrays();
		String secondCourse = myCourses.getCourses();
		System.out.println("The 2nd Course taken is: " + secondCourse);
	}

}
