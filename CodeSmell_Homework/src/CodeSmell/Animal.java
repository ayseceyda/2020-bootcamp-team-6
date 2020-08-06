package CodeSmell;

public class Animal {
	String AnimalName;
	String AnimalID;
	State myState;
	
	enum State{
		ADOPTED,
		NONADOPTED,
		WAITING_FOR_ADOPT,
		DEATH,
		PREGNANT
	}
	
		
	public Animal(String animalName, String animalID, State animalState) {
		super();
		AnimalName = animalName;
		AnimalID = animalID;
		myState = animalState;
	}



	public static void main (String[] args) {
        Animal animal1 = new Animal("Dog1", "1", State.NONADOPTED);
        Animal animal2 = new Animal("Cat2", "1", State.PREGNANT);
        CheckAnimal(animal1);
        CheckAnimal(animal2);
        
    }
	
	
	public static void CheckAnimal(Animal myAnimal) {
		switch(myAnimal.myState) {
		case ADOPTED:
			System.out.println("This animal is adopted");
			break;
		case NONADOPTED:
			System.out.println("This animal is not adopted");
			break;
		case WAITING_FOR_ADOPT:
			System.out.println("This animal is waiting for adoption");
			break;
		case DEATH:
			System.out.println("This animal is death");
			break;
		case PREGNANT: 
			System.out.println("This animal is pregnant so can't be adopt");
			break;
		}
	}
	

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}
