package State;

public class Context {
	private AnimalState state;
	
	public Context() {
		state = null;
	}

	public AnimalState getState() {
		return state;
	}

	public void setState(AnimalState state) {
		this.state = state;
	}

}
