using System;
using System.Linq;

namespace AssignStringCount
{
    public class Program
    {
      public  static void Main(string[] args)
        {
            string para = "Abhishek aa sa aa a a a a a";
            string[] ArraystringofPara = para.Split(' ');

            Console.WriteLine("Using Lambda Expression");
            var TotalCount = ArraystringofPara.Where(r => r.Equals("a"));
            Console.WriteLine($"Total a count {TotalCount.Count()}");


            Console.WriteLine("Using LINQ ");
            var TotalLinqCount = from r in ArraystringofPara where r.Equals("zz") select r;
            Console.WriteLine($"Total z count {TotalLinqCount.Count()}");
        }
    }
}
