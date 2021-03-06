using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CodeFirstApproach
{
   public class Product
    {
        public string ProductID { get; set; }

        [Required]
        public string Title { get; set; }

        public int Price { get; set; }

        public ProductDetails ProductDetails { get; set; }
    }
}
