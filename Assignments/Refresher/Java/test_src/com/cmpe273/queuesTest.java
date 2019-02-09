package com.cmpe273;

import static org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.api.Test;

class queuesTest {
	
	@Test
	void testSchedular() {
		// fail("Not yet implemented");
		String testValue = queues.schedular();
		String expectedValue = "Google Chrome";
		assertEquals(expectedValue, testValue);
	}

}
