package com.cmpe273;

import java.util.*;

public class stacks {
	
	public String deck() {		
		Stack<String> cardStack = new Stack<String>();	
		cardStack.push("Queen of Hearts");
		cardStack.push("Jack of Clubs");
		cardStack.push("Ace of Diamonds");
		cardStack.push("Seven of Spades");	
		System.out.println("List of Cards: " + cardStack);
		
		return cardStack.firstElement();
	}
	
	public static void main(String args[]) {
		stacks myStack = new stacks();
		System.out.println("First card pushed into the deck: " + myStack.deck());
	}
}
