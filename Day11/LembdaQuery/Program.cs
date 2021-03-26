using System;
using System.Collections.Generic;
using System.Linq;

namespace LembdaQuery
{
   public class Program
    {
        static void Main(string[] args)
        {
            List<Product> product = new List<Product> {
            
                new Product{ Id=121,Title="Pen",Price=300,Owner="Jenny" },
                 new Product{ Id=122,Title="Pencil",Price=400,Owner="Dane" },
                  new Product{ Id=123,Title="Ball",Price=250,Owner="Jimmy" },
                   new Product{ Id=124,Title="Coat",Price=100,Owner="Rex" },
                    new Product{ Id=124,Title="Colors",Price=210,Owner="Juilet" }

            };

            var owners = product.Where(p => p.Price > 100).Select(p => new { p.Owner}).ToList();
            owners.ForEach(o => Console.WriteLine(o));

            var o = (from r in product where (r.Price > 100 && r.Id == 100)select(r.Id,r.Owner)).ToList();

           
        }

        
    }

    public class Product {
    
        public int Id { get; set; }
        public string Title { get; set; }

        public int Price { get; set; }
        public string Owner { get; set; }

    }
}
