package com.cmpe273;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class CollectionsTest {
	
	private Collections classUnderTest;

	@BeforeEach
	void setUp() throws Exception {
		classUnderTest = new Collections();
	}

	@Test
	void test() {
		boolean result = classUnderTest.match("CmpE 273");
		boolean expectedValue = true;
		assertEquals(expectedValue, result);	
	}

}
