package com.cmpe273;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class interfacesTest {

	private interfaces classUnderTest;

	
	@BeforeEach
	void setUp() throws Exception {
		classUnderTest = new interfaces();
	}

	@Test
	void test() {
		double expectedValue = 20000.0;
		double result = classUnderTest.calculate();
		
		assertEquals(expectedValue, result);
	}

}
