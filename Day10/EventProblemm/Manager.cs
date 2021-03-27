using System;
using System.Collections.Generic;
using System.Text;

namespace EventProblemm
{
   public class Manager
    {
        public delegate bool sendMessageDelegate(Message m);
        private Agent.taskenddelegate td;
        Agent a;


        public Manager()
        {
            a = new Agent();

        }

        public void RequestDelivery(Message m , sendMessageDelegate t) {

            td = new Agent.taskenddelegate(t);
            a.doTask(td,m);
            a.notificationChanged += new Agent.NotificationHandler((o,e)=>
                {
                Console.WriteLine(e.status);
            });
        }

    }
}
