using System;

namespace EventProblemm
{
    public class Program
    {
        static void Main(string[] args)
        {
            Manager m1 = new Manager();

            Message m1message = new Message {

                address = "The PG",
                messagebody = "Hello Rex"


            };

            Manager.sendMessageDelegate md = SendTypes.sendByWhatsapp;
            m1.RequestDelivery(m1message, md);

            Agent a = new Agent();

            a.notificationChanged += new Agent.NotificationHandler(showNotification);


        }

        public static void showNotification(object clock,NotificationArgs e){

            Console.WriteLine(e.status);
        }
    }
}
