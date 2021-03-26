using System;

namespace DelegateDemo
{
   public class Program
    {
        static void Main(string[] args)
        {
            BookDB Newbook = new BookDB();

            Newbook.AddBook("Angular Essentials","Dananjay Kumar Singh",350,true);
            Newbook.AddBook("Java Fx", "DarkHill Publications", 200, true);

            ProcessPapaerBackDelegate de = new ProcessPapaerBackDelegate(SoldBook);

            de += RentBook;

            Newbook.ProcessPaperbackBooks(de);
        }

       static void SoldBook(Book b) {

            Console.WriteLine("SoldBook : "+b.title);
        
        }

      static  void RentBook(Book b)
        {

            Console.WriteLine("RentBook : " + b.title);

        }
    }
}
