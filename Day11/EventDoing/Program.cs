using System;

namespace EventDoing
{
    class Program
    {
        public static int a =10;
        public static int b = 20;

        static void Main(string[] args)
        {
            
                Func<int> getRandomNumber = delegate ()
                {
                    Random rnd = new Random();
                    return rnd.Next(1, 100);
                };
            Func<int> func = add;
        }

        static int  add() {

            Console.WriteLine($"Sum of {a}+{b} = {a+b}");

            return a + b;
        }

        void sub()
        {

            Console.WriteLine($"Sub of {a}-{b} = {a - b}");

        }
    }
}
