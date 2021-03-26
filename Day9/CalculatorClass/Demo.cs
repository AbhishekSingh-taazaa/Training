using CalcLib;
using System;
using System.Collections.Generic;
using System.Text;

namespace CalculatorClass
{
   static class Demo
    {

        public static int Extenddemo(this Claculator c) {

            int res = c.Num1 / c.Num2;

            return res;
        }
    }
}
