using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataBaseApproach
{
    class Program
    {
        static void Main(string[] args)
        {
            taazaarexEntities ProductDatabase = new taazaarexEntities();

            Product p1 = new Product
            {

                Id = 6,
                Title = "Box",
                Price = 250,
                Quantity = 15,
                Vendor = "Jin",

            };

           

            var p2 = ProductDatabase.Products.Find(6);
           // ProductDatabase.Products.Add(p12);
            ProductDatabase.Products.Remove(p2);
            ProductDatabase.SaveChanges();

            var result = (from r in ProductDatabase.Products select r).ToList();
            result.ForEach(item => {

                Console.WriteLine(item.Id+"  "+item.Title+"  "+item.Price+"  "+item.Quantity);

            });

            Console.ReadKey();
        }
    }
}
