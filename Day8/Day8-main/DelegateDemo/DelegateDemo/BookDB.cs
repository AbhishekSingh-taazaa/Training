using System;
using System.Collections;
using System.Collections.Generic;
using System.Text;

namespace DelegateDemo
{
    public delegate void ProcessPapaerBackDelegate(Book book);
   public class BookDB
    {
        ArrayList list = new ArrayList();

        public void AddBook(string title,string author,decimal price,bool paperback)
        {

            list.Add(new Book() {
            
               title =title,
               author = author,
               price = price,
               paperback = paperback


            
            });

        }

        public void ProcessPaperbackBooks(ProcessPapaerBackDelegate processBook) {

            foreach (Book b in list) {

                if (b.paperback)
                {
                    processBook(b);
                }

            }
        
        }

    }
}
