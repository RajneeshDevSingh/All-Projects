import java.util.Stack;
import java.util.*;;

public class s2 {
    public static void main(String[] args) {
        String str = "136a1";
        int total = 0;
        for(int i=0; i < str.length(); i++) {
           Boolean flag = Character.isDigit(str.charAt(i));
           if(flag) {
             int a =  str.charAt(i) - '0';
             total = total + a;
            //   System.out.println("'"+ str.charAt(i)+"' is a number");
           }
           else {
             total = total + 1;
            //   System.out.println("'"+ str.charAt(i)+"' is a letter");
           }
        }

        int result = total / 3;

        System.out.println(result);
     }
}