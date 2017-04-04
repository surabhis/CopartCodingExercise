import java.io.*;
public class stringtoint {
	public static void main(String[] args)
	{
		String s="1234";
		int num=0;
		int rev=1;
		int i=s.length()-1;
		int n;
		while(i>=0)
		{
			//getting the last character as integer
			n=s.charAt(i)-'0';
			num=num+n*rev;
			rev=rev*10;
			i--;
		}
		System.out.println(num);
	}
}
