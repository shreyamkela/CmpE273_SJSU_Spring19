package com.cmpe273;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class genericsTest {
	
	// Refer - https://www.baeldung.com/junit-5
	
	private generics classUnderTest;

	@BeforeAll
	static void setup() {
	    System.out.println("@BeforeAll - executes once before all test methods in this class");
	}
	 
	@BeforeEach
	void init() {
		classUnderTest = new generics();
		System.out.println("@BeforeEach - executes before each test method in this class");
	}
	
	@Test
	void test() {
		boolean testValue = classUnderTest.checkLicense(135957);
		boolean expectedValue = true;
		assertEquals(expectedValue, testValue);
	}
	
	@AfterEach
	void tearDown() {
		System.out.println("@AfterEach - executed after each test method.");
	}
	 
	@AfterAll
	static void done() {
		System.out.println("@AfterAll - executed after all test methods.");
	}
	

}
