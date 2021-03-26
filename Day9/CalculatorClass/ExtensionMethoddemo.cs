using System;
using System.Collections.Generic;
using System.Text;
using CalcLib;

namespace CalculatorClass
{
   public static class ExtensionMethoddemo
    {

       

        public static int mul(this Claculator obj) {

           int result = obj.Num1 * obj.Num2;

            return result;
        
        }

        public static int countvowel(this Claculator obj2) {

            string s2 = obj2.s1;
            int i =0;
            int count = 0;
            while (i < s2.Length) { 
                if (s2[i] == 'a' || s2[i] == 'e' || s2[i] == 'i' || s2[i] == 'o' || s2[i] == 'u') {


                    count++;
                
                
                }
                i++;
            }
            return count;

        }
    }
}
