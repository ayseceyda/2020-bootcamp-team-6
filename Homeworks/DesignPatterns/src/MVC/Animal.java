package MVC;

//Data class
public class Animal {
	private int animalNo;
	private String name;
	
	public Animal(int animalNo, String name) {
		super();
		this.animalNo = animalNo;
		this.name = name;
	}
	public Animal() {
		// TODO Auto-generated constructor stub
	}
	//getter setter
	public int getAnimalNo() {
		return animalNo;
	}
	public void setAnimalNo(int animalNo) {
		this.animalNo = animalNo;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	//functions

}
