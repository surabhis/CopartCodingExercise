import java.util.StringTokenizer;
public class LicenseKeys
	public static String Split(String key, int K)
	{
		//Empty string
		if(key.length()==0)
		{
			return "Empty String";
		}
		// Lower to upperv case
		String upper_key = key.toUpperCase();
		StringBuilder sb = new StringBuilder();
		StringTokenizer st = new StringTokenizer(upper_key,"-");
//new key without hyphens
		while(st.hasMoreElements())
		{
			sb.append(st.nextElement())	;
		}
		
		int remainder = 0;
		//To output string in desired format where first block can have fewer than K characters, dividng 
		// String in n blocks of K length each and putting remainder characters in first block.
		try
		{
			 remainder = sb.length()%K;
			 System.out.print(sb.subSequence(0,remainder));
				int i = remainder;
				while( i<sb.length())
				{
					if(i!=0)
					System.out.print("-");
					System.out.print(sb.subSequence(i,i+K));
					i = i+K;
				}
		}
		catch(Exception e)
		{
			System.out.println(sb);
			return "Done";
		}
		return "Done";
	}
	public static void main(String[] args) {
		Split("2-4A0r7-4k",4);
	}
}