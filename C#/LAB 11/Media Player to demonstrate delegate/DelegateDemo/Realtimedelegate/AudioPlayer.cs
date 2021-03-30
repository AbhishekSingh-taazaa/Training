using System;
using System.Collections.Generic;
using System.Text;

namespace Realtimedelegate
{
   public  class AudioPlayer
    {
        private int audiostatus;

        public int AudioFile(string extension ) {

            if (extension != "wmv")
            {

                audiostatus = -1;
               

            }

            else {

                audiostatus = 0;
            
            }


            return audiostatus;

        }

    }
}
