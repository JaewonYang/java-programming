package gugudan;
import java.util.Scanner;

public class input {
	public static int n1, n2;

	public  void inputdata() {
		
	System.out.println( "수를 입력하시오: ");
	  Scanner scan1 =new Scanner(System.in); 
	  Scanner scan2 =new Scanner(System.in); 
	  n1 = scan1.nextInt(); 
	  n2 = scan2.nextInt();
	}
	public int getnum1(){return n1;}	
	public int getnum2(){return n2;}
}