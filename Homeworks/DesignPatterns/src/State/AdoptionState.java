package State;

public class AdoptionState implements AnimalState{

	@Override
	public void doAccomandationState(Context context) {
		System.out.println("Animal adopted");
		context.setState(this);
	}
	
	public String toString() {
		return "Animal is adopted";
	}

}
