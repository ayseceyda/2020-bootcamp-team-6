package State;

public class ShelterState implements AnimalState{

	@Override
	public void doAccomandationState(Context context) {
		System.out.println("Animal is in the shelter");
		context.setState(this);
	}
	
	public String toString() {
		return "Animal is sheltered";
	}

}
