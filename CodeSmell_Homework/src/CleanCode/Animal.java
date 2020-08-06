package CleanCode;


public abstract class Animal{
	
	public enum AnimalState{
		ADOPTED,
		NONADOPTED,
		WAITING_FOR_ADOPTION
	}
	
	int animalNo;
	AnimalState animalState;
	public abstract void Display();
	public abstract void DisplayAnimalAdoptionState();

}
