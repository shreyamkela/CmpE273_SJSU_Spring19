package com.cmpe273;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class arraysTest {
	
	private arrays classUnderTest;

	@BeforeEach
	void setUp() throws Exception {
		classUnderTest = new arrays();
	}

	@Test
	void test() {
		String expectedValue = "CmpE 275";
		String result = classUnderTest.getCourses();
		assertEquals(expectedValue, result);
	}

}
