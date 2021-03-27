using System;
using System.Collections.Generic;
using System.Text;

namespace EventProblemm
{
  public  class NotificationArgs : EventArgs
    {

        public bool status;

        public NotificationArgs(bool a) {

            status = a;
        }

    }
}
