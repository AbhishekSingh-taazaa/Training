using System;
using System.Collections.Generic;
using System.Text;

namespace Realtimedelegate
{
   public class VideoPlayer
    {

        private int videostatus;

        public int VideoFile(string extension) {

            if (extension != "mkv")
            {

                videostatus = -1;
            }
            else {

                videostatus = 0;
            }

            return videostatus;
        }
    }
}
