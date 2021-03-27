using System;
using System.Collections.Generic;
using System.Text;


namespace EventProblemm
{
   public  class Agent
    {
        public delegate void NotificationHandler(object agent,NotificationArgs notification);
        public event NotificationHandler notificationChanged;
        public delegate bool taskenddelegate(Message m );
        private bool isTaskCompleted = false;

        public void doTask(taskenddelegate task,Message m) {

            NotificationArgs notificationInfo = new NotificationArgs(isTaskCompleted);
            if (notificationChanged != null)
            {
                Console.WriteLine("start");
                notificationChanged(this, notificationInfo);
            }

            isTaskCompleted = true;

            if (isTaskCompleted) {

                var status = task(m);
                if (notificationChanged != null)
                {
                    notificationChanged(this, notificationInfo);
                    Console.WriteLine("ty");
                
                }
            
            }
        
        }
    }
}
