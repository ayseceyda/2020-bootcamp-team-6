package MVC;

public class Test {
	
	public static void main(String[] args) {
		
		Animal model = IniliazeAnimal();
		AnimalView view = new AnimalView();
		AnimalController controller = new AnimalController(model, view);
		
		controller.updateView();
		controller.setAnimalName("Beagle");
		controller.updateView();

	   }
	
	private static Animal IniliazeAnimal() {
		Animal animal = new Animal();
		animal.setName("Golden");
		animal.setAnimalNo(15);
		return animal;
	}


}
