package gugudan;

public class control{
	private int static n1;
	private int static n2;
	private int r1;
	private int r2;
	private int r3;
	private int r4;
	private int r5;
	
	public static void main(String[] args) {
	
	 input  input;
	 jakup jakup;
	 output output;
	 
	 input= new input();
	 jakup= new jakup();
	 output= new output();
	
	 
	 n1=input.n1;
	 n2=input.n2;
	 
	input.inputdata(); 
	jakup.datajakup(n1,n2); 
	 
	
	}
	  
}

