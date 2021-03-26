using System;

namespace Realtimedelegate
{
   public class Program
    {
       public static void Main(string[] args)
        {
            MediaPlayer M = new MediaPlayer();
            VideoPlayer V = new VideoPlayer();
            AudioPlayer A = new AudioPlayer();

            MediaPlayer.PlayerStatus statusdele = V.VideoFile;

            
            M.MediaResult(statusdele, "mkv");

            statusdele = A.AudioFile;

            M.MediaResult(statusdele,"mvc");
           
        }
    }
}
