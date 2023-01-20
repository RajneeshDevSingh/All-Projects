import java.util.*;;
public class stack {
    
    public static void main(String[] args)
    {
        Scanner scn = new Scanner(System.in);
        int n = scn.nextInt();

        int arr[] = new int[n];
        for(int i =0;i<n;i++)
        {
            arr[i] = scn.nextInt();
        }

        insertionSort(arr);
    }

        public  static void insertionSort(int arr[]) 
        {
            for(int i = 1;i<arr.length;i++)
            {
                for(int j = i-1;j >=0; j--)
                {

                    String num1 = Integer.toString(arr[i]);
                    int first = +num1.length();
                    String num2 = Integer.toString(arr[j]);
                    int seco = +num2.length();

                    if(first<seco)
                    {
                        int temp = arr[j];
                        arr[j] = arr[j+1];
                        arr[j+1] = temp;
                    }
                    
                }
            }

            for(int i : arr)
            {
    
                System.out.print(i+", ");
            }
    }
}
