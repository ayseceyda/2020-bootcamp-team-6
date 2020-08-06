package MVC;

public class AnimalController {
	private Animal animal;
	private AnimalView view;

	
	public AnimalController(Animal animal, AnimalView view) {
		super();
		this.animal = animal;
		this.view = view;
	}

	public String getAnimalName() {
		return animal.getName();
	}

	public void setAnimalName(String animalName) {
		animal.setName(animalName);
	}
	
	public int getAnimalNo() {
		return animal.getAnimalNo();
	}
	
	public void setAnimalNo(int animalNo) {
		animal.setAnimalNo(animalNo);
	}
	
	public void updateView() {
		view.printAnimal(animal.getName(), animal.getAnimalNo());
	}

}
