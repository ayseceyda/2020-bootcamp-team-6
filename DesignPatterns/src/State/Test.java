package State;

public class Test {

	 public static void main(String[] args) {
		 Context context = new Context();
		 
		 ShelterState shelter = new ShelterState();
		 shelter.doAccomandationState(context);
		 System.out.println(context.getState().toString());
		 
		 AdoptionState adoption = new AdoptionState();
		 adoption.doAccomandationState(context);
		 System.out.println(context.getState().toString());
	   
	   }
}
