import java.util.*;;
public class subStr 
{
    public static void main(String[] args)
    {
        Scanner scn = new Scanner(System.in);
        
        String s = scn.nextLine();

        int number = 0;
        for(int i = 0; i<s.length();i++)
        {
            for(int j = i+1; j <= s.length();j++)
            {
                String str = s.substring(i , j);

                if(isPalindrome(str) == true)
                {
                    number = number + 1;
                }
                // System.out.print(str);
            }
        }
        System.out.println(number);


    }

    public static boolean isPalindrome(String str)
    {
            int i = 0;
            int j = str.length()-1;
            while(i<=j)
            {
                char ch1 = str.charAt(i);
                char ch2 = str.charAt(j);

                if(ch1 != ch2)
                {
                    return false ;
                }
                else
                {
                    i++;
                    j++;
                }
            }

            return true;
    }
    
}