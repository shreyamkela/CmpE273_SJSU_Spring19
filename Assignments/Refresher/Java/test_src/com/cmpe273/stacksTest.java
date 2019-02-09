package com.cmpe273;

import static org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class stacksTest {
	
	// In test driven development or TDD, implement only the class declarations that have to be tested, then straight away implement the test cases and run them with pseudo implementation inside classes. When the tests pass, implement the actual code insde the classes. That is, in TDD we first implement the tests and then according to the tests we shape our code. That is we shape our code around the tests for different methods and the test cases for individual methods. We should keep in mind all the edge cases and test them as well. 
	// Refer - https://www.youtube.com/watch?v=LPPji9JESgQ
	// Refer - https://www.youtube.com/watch?v=2Ekty7t621k
	
	private stacks classUnderTest; // Declare an instance of the class that will be tested

	@BeforeEach // For JUnit 5. BeforeEach is equivalent to Before used previously as in JUnit 4.
	void setUp() throws Exception {
		classUnderTest = new stacks(); // Do this before the test. Instantiate the stack object
	}

	@Test
	void test() {
		String expectedValue = "Queen of Hearts";
		String result = classUnderTest.deck();
		assertEquals(expectedValue, result); // assertEquals is the JUnit assertion that checks for equality
	}

}
