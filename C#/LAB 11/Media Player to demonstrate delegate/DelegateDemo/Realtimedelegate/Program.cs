using System;

namespace Realtimedelegate
{
   public class Program
    {
       public static void Main(string[] args)
        {
            MediaPlayer Mediaplayer = new MediaPlayer();
            VideoPlayer Videoplayer = new VideoPlayer();
            AudioPlayer AudioPlayer = new AudioPlayer();

            MediaPlayer.PlayerStatus statusdele = Videoplayer.VideoFile;

            
            Mediaplayer.MediaResult(statusdele, "mkv");

            statusdele = AudioPlayer.AudioFile;

            Mediaplayer.MediaResult(statusdele,"mvc");
           
        }
    }
}
