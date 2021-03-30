using System;

namespace Clockdemo
{
     public class Program
    {
        public static void Main(string[] args)
        {
            Clock C = new Clock();

            DisplayClock dc = new DisplayClock();
            dc.Subscribe(C);
            Inventory I = new Inventory();
            I.Subscribe(C);
            C.run();

        }
    }
}
