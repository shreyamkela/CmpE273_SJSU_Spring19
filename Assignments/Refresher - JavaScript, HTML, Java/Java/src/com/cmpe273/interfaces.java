package com.cmpe273;

public class interfaces {
	
	public static void main(String args[]) {

		interfaces newTransaction = new interfaces();
		double finalAmount = newTransaction.calculate();
		System.out.println("Final Amount: " + finalAmount);
		
	}
	
	public double calculate() {
		double initialAmount = 20000.0;
		double depositAmount = 500.0;
		int depositCount = 4;
		double deductAmount = 200.0;
		int deductCount = 10;
		
		transact newDeposit = new deposit();
		double totalAfterDeposit = newDeposit.transaction(depositCount, depositAmount, initialAmount);
		
		transact newDeduct = new deduct();
		double totalAfterDeduct = newDeduct.transaction(deductCount, deductAmount, totalAfterDeposit);
		
		System.out.println("Initial Amount: " + initialAmount);
		System.out.println("Amount after deposit: " + totalAfterDeposit);
		System.out.println("Amount after deduct: " + totalAfterDeduct);	
		
		return totalAfterDeduct;
	}
	
	
		
}

interface transact { 
	double transaction(int transactionCount, double transactionAmount, double totalAmount);
}

class deposit implements transact {
	public double transaction(int transactionCount, double transactionAmount, double totalAmount) {
		double totalTransaction = transactionAmount*transactionCount;
		totalAmount = totalAmount + totalTransaction;
		return totalAmount;
	}
}

class deduct implements transact {
	public double transaction(int transactionCount, double transactionAmount, double totalAmount) {
		double totalTransaction = transactionAmount*transactionCount;
		totalAmount = totalAmount - totalTransaction;
		return totalAmount;
	}
}
