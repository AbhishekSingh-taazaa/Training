﻿using System;
using System.Collections.Generic;
using System.Text;

namespace Clockdemo
{
   public class DisplayClock
    {

        public void Subscribe(Clock theClock)
        {

            theClock.SecondChanged += new Clock.SecondChangeHandler(TimeHasChanged);

        }

        public void TimeHasChanged(object theClock , TimeInfoEventArgs ti) {

            Console.WriteLine("Current  Time  : {0}:{1}:{2}", ti.hour.ToString(), ti.min.ToString(), ti.sec.ToString());

        }

    }
}
