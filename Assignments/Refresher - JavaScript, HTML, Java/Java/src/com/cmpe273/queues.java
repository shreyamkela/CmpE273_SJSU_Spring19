package com.cmpe273;

import java.util.*;

public class queues {
	
	public static String schedular() {
		Queue<String> taskQueue = new LinkedList<String>();
		
		taskQueue.add("Google Chrome");
		taskQueue.add("VLC player");
		taskQueue.add("MS Word");
		taskQueue.add("Visual Studio Code");
		
		System.out.println("The tasks are: " + taskQueue);
		
		System.out.println("Task with the most priority: " + taskQueue.peek());
		
		return taskQueue.remove();
		
	}
	
	public static void main(String args[]) {
		// queues myTasks = new queues(); // If the main method is static and the schedular() method is not, we can't call the method without first creating a queues object. Refer - https://stackoverflow.com/questions/11491750/cannot-make-a-static-reference-to-the-non-static-method-fxnint-from-the-type-t
		String priorityTask = queues.schedular();
		System.out.println("Task to be executed first: " + priorityTask);
	}

	
}
