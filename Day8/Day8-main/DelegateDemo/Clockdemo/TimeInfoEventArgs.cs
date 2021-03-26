using System;
using System.Collections.Generic;
using System.Text;

namespace Clockdemo
{
    public class TimeInfoEventArgs : EventArgs
    {
        public int hour;
        public int min;
        public int sec;

        public TimeInfoEventArgs(int hour,int min,int sec) {

            this.hour = hour;
            this.sec = sec;
            this.min = min;
        
        }

    }
}
