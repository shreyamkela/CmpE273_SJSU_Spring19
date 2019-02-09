package com.cmpe273;

import static org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.api.Test;

class queuesTest {
	
	// For comments related to JUnit, refer stackTest.java
	
	@Test
	void testSchedular() {
		// fail("Not yet implemented");
		String testValue = queues.schedular();
		String expectedValue = "Google Chrome";
		assertEquals(expectedValue, testValue);
	}

}
