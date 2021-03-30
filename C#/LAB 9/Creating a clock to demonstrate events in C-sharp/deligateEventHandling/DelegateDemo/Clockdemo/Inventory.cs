using System;
using System.Collections.Generic;
using System.Text;

namespace Clockdemo
{
   public  class Inventory
    {
        public void Subscribe(Clock theClock) {

            theClock.SecondChanged += new Clock.SecondChangeHandler(InventoryHasChanged);
        
        }
        public void InventoryHasChanged(object theClock, TimeInfoEventArgs ti) {

            Console.WriteLine("Inventor Time Has : {0}:{1}:{2}", ti.hour.ToString(), ti.min.ToString(), ti.sec.ToString());
        
        
        }

    }
}
