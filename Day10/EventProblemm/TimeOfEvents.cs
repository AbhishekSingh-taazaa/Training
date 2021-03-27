using System;
using System.Collections.Generic;
using System.Text;

namespace EventProblemm
{
   public class TimeOfEvents : EventArgs
    {
        public int hour;
        public int minute;
        public int second;

        public TimeOfEvents(int hour,int minute,int second) {

            this.hour = hour;
            this.minute = minute;
            this.second = second;
        
        }
    }
}
