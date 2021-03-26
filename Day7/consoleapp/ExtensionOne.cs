using core;
using infrastructure;
using System;
using System.Collections.Generic;
using System.Text;

namespace consoleapp
{
   public static class ExtensionOne
    {
         
        public static void Display(this Inventory I ) {

            Console.WriteLine(I.ToString());
        }
    }
}
