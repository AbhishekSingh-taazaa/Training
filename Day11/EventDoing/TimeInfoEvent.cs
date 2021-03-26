using System;
using System.Collections.Generic;
using System.Text;

namespace EventDoing
{
   public class TimeInfoEvent : EventArgs
    {
        public int hours;
        public int minutes;
        public int seconds;

        public TimeInfoEvent(int hours,int minutes,int seconds)
        {
            this.hours = hours;
            this.minutes = minutes;
            this.seconds = seconds;
        
        }
    }
}
