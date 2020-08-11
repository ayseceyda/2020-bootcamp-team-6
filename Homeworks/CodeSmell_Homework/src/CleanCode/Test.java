package CleanCode;

import java.util.ArrayList;

import CleanCode.Animal.AnimalState;

public class Test {
	
	public static void main(String[] args) {
		
		ArrayList<Animal> animals = new ArrayList<Animal>();
		animals.add(new Dog(AnimalState.ADOPTED, "DOG1"));
		animals.add(new Cat(AnimalState.WAITING_FOR_ADOPTION, "CAT1"));
		animals.add(new Dog(AnimalState.NONADOPTED, "DOG2"));
		animals.add(new Cat(AnimalState.ADOPTED, "CAT2"));
		
		for(int i = 0; i< animals.size(); i++) {
				animals.get(i).Display();
				animals.get(i).DisplayAnimalAdoptionState();
		}

    }
	


}
