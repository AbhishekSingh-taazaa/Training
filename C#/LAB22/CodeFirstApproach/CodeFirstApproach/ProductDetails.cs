using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CodeFirstApproach
{
   public class ProductDetails
    {
        public string ProductDetailsID { get; set; }

        public string Vendor { get; set; }

        public int Quantity { get; set; }

        public string ExpiryDate { get; set; }

        public string ProductID { get; set; }

        [Required]
        public Product Products { get; set; }
    }
}
