using System;
using CalcLib;

namespace CalculatorClass
{
    class Program
    {
        static void Main(string[] args)
        {
            CalcLib.Claculator C1 = new Claculator {

                Num1 = 20,
                Num2 =30,
                s1 = "rex"
              
            };

            CalcLib.Claculator c2 = new Claculator
            {
                Num1 = 20,
            Num2 = 2

            };

            int z = c2.Extenddemo();

            Console.WriteLine(z);

           int a =  C1.mul();
           int b  =C1.add();
           int c =  C1.sub();
            int ctt = C1.countvowel();
            Console.WriteLine("Multiply : "+ a + " Addition : "+b+" Subtration : "+c +" Count of vowel : "+ctt);
        }
    }
}
