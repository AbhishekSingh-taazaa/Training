using System;
using System.Collections.Generic;
using System.Text;

namespace Realtimedelegate
{

   
     public class MediaPlayer
    {
        public delegate int PlayerStatus(string ext);
        public void MediaResult(PlayerStatus  P, string type ) {

            var status = P(type);

            if (status == 0)
            {

                Console.WriteLine("Media Did not play Successfully");

            }
            else {

                Console.WriteLine("Meida Played Successfully");
            
            }
        
        }

    }
}
