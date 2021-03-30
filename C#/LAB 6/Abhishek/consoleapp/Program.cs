using System;
using infrastructure;


namespace consoleapp
{
   public class Program
    {
       public static void Main(string[] args)
        {
           infrastructure.Inventory i1 = new Inventory();

            i1.AddProduct("Rex",23,"Olive");
            var y = i1.ToString(); 

            Console.WriteLine(y);
            i1.Display();
        }
    }
}
