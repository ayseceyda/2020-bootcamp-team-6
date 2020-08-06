package CleanCode;


public class Cat extends Animal{
	
	AnimalState CatState;
	String CatName;

	public Cat(AnimalState catState, String catName) {
		super();
		CatState = catState;
		CatName = catName;
	}

	public AnimalState getCatState() {
		return CatState;
	}
	public void setCatState(AnimalState catState) {
		CatState = catState;
	}
	public String getCatName() {
		return CatName;
	}
	public void setCatName(String catName) {
		CatName = catName;
	}

	@Override
	public void DisplayAnimalAdoptionState() {
		System.out.println("Cat adoptable status: " + CatState);
	}
	@Override
	public void Display() {
		System.out.println("This is a cat class");

	}


}
