using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CodeFirstApproach
{
    public class ProductDatabaseContext : DbContext
    {
        public DbSet<Product> Products { get; set; }

        public DbSet<Employee> Employees { get; set; }

        public DbSet<ProductDetails> ProductDetails { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder) {

            optionsBuilder.UseSqlServer(@"Data Source=DESKTOP-GMO414V\SQLEXPRESS;Initial Catalog=ProductDatabase;User ID=sa;Password=Asdf!234;");
        
        }
    }
}
