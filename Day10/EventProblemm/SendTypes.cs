using System;
using System.Collections.Generic;
using System.Text;

namespace EventProblemm
{
    public static class SendTypes
    {
        public static bool sendByEmail(Message M ){

            Console.WriteLine($"{M.messagebody}  is deliver by Email to {M.address}");

            return true;
        
        }

        public static bool sendByTwitter(Message M)
        {

            Console.WriteLine($"{M.messagebody}  is deliver by Twitter to {M.address}");

            return true;
        }

            public static bool sendByWhatsapp(Message M)
            {

                Console.WriteLine($"{M.messagebody}  is deliver by Whatsapp to {M.address}");

                return true;

            }
        
    }
}
