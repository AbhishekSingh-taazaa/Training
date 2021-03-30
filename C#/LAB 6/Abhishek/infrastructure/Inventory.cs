using System;
using System.Collections;
using System.Collections.Generic;
using System.Text;
using core;

namespace infrastructure
{
    public class Inventory
    {
        ArrayList Pro = new ArrayList {new Product { title = "Pen", price = 12, color ="Blue"},
                                       new Product { title = "Pencil", price = 22, color ="Grey"},
                                       new Product { title = "Sharpner", price = 18, color ="Red"},
                                       new Product { title = "Ball", price = 30, color ="Green"},
                                       new Product { title = "Ereaser", price = 7, color ="Black"}

        };

        
        //public Inventory() {

        //    Pro.Add(new Product
        //    {

        //        title = "Pen",
        //        price = 12,
        //        color ="Blue"

        //    });

        //    Pro.Add(new Product
        //    {

        //        title = "Pencil",
        //        price = 8,
        //        color = "Grey"

        //    });

        //    Pro.Add(new Product
        //    {

        //        title = "Ball",
        //        price = 40,
        //        color = "Red"

        //    });

        //    Pro.Add(new Product
        //    {

        //        title = "Ereaser",
        //        price = 5,
        //        color = "White"

        //    });

        //    Pro.Add(new Product
        //    {

        //        title = "Glue",
        //        price = 30,
        //        color = "Green"

        //    });

        //    Console.WriteLine("Action Performed");
        //}
        

        public void AddProduct(string title,decimal price,string color) {

            Pro.Add(new Product
            {

                title = title,
                price=price,
                color =color

            });
            
        
        }

        public override string ToString()
        {
            String s1 = "";
                foreach (Product item in Pro)
                {

                s1 += item.title + "  " + item.price + "  " + item.color+"\n";

                }

            return s1;
            }
    }
}
