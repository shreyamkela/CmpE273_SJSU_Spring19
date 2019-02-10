package com.cmpe273;

// Refer - https://www.javatpoint.com/multithreading-in-java
// Refer - https://www.youtube.com/watch?v=L95658yXRgI&list=PLsyeobzWxl7rmuFYRpkqLanwoG4pQQ7oW
// Refer - https://www.youtube.com/watch?v=Xj1uYKa8rIw&list=PLsyeobzWxl7rmuFYRpkqLanwoG4pQQ7oW

public class multithreading {
	
	public static void main(String args[]) {
		
		portMultithreading();
	}
	
	public static String portMultithreading() {
		
		Port_1 port1 = new Port_1();
		Port_2 port2 = new Port_2();
		
		port1.start(); // Start will start the thread 1 and execute the run for port1. start() has code in itself to run run() without run() being invoked by us.
		try{Thread.sleep(20);}	catch(Exception e){System.out.println(e);} // For better readability we adjust try catch into a single line. We add this 20ms delay so that Port 2 prints after port 1 everytime. If delay is not included, then it might print port 1 after port 1 and so on. It will all be random and dependent on the CPU schedular.
		port2.start();
		
		return "Last port listened to: 2";
	}
	
}


class Port_1 extends Thread {
	public void run() { // run() is a mandatory name of the multithreaded method
		for(int i=0;i<5;i++) {
			System.out.println("Listening at Port 1");
			try { // Raise exception if sleep is not activated
				Thread.sleep(500);
			}
			catch(Exception e) {
				System.out.println(e);
			}
		}
	}
}

class Port_2 extends Thread {
	public void run() {
		for(int i=0;i<5;i++) {
			System.out.println("Listening at Port 2");
			try { 
				Thread.sleep(500);
			}
			catch(Exception e) {
				System.out.println(e);
			}
		}
	}
}