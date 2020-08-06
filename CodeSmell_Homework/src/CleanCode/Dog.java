package CleanCode;

public class Dog extends Animal{

	AnimalState DogState;
	String DogName;
	
	public Dog() {
		super();
	}
	public Dog(AnimalState dogState, String dogName) {
		super();
		DogState = dogState;
		DogName = dogName;
	}
	
	public AnimalState getDogState() {
		return DogState;
	}
	public void setDogState(AnimalState dogState) {
		DogState = dogState;
	}
	public String getDogName() {
		return DogName;
	}
	public void setDogName(String dogName) {
		DogName = dogName;
	}
	
	
	@Override
	public void DisplayAnimalAdoptionState() {
		System.out.println("Dog adoptable status: " + DogState);
		
	}
	@Override
	public void Display() {
		System.out.println("This is a dog class");

	}

	
}
