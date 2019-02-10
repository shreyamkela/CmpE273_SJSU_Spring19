package com.cmpe273;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class multithreadingTest {

	@Test
	void test() {
		String testValue = multithreading.portMultithreading();
		String expectedValue = "Last port listened to: 2";
		assertEquals(expectedValue, testValue);
		
	}

}
