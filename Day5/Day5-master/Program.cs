//k
using System;

namespace Day5
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
            Console.WriteLine("Enter your Name");
            var name=Console.ReadLine();
            var date=DateTime.Now;
            Console.WriteLine($" Hello {name} on {date}");
            Console.ReadKey(true);
                        
        }
    }
}
