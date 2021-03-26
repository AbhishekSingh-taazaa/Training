using System;
using System.Collections.Generic;
using System.Text;

namespace GenericesDemo
{
  public  class Message
    {
        public string sender { get; set; }
        public string content { get; set; }
        public string reciver { get; set; }

        public override string ToString()
        {
            string s1 = "Sender :" + sender + " Message :" + content + " Reciver :" + reciver;
            return s1;
        }
    }

   
}
