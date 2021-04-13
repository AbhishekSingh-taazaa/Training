using System;

namespace CodeFirstApproach
{
  public  class Program
    {
      public  static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");

            using (ProductDatabaseContext productDatabase = new ProductDatabaseContext())

            {





                Product p1 = new Product
                {

                    ProductID = "1",
                    Title = "Pen",
                    Price = 100

                };

                Product p2 = new Product
                {

                    ProductID = "2",
                    Title = "Pencil",
                    Price = 50

                };

                Product p3 = new Product
                {

                    ProductID = "3",
                    Title = "PencilBox",
                    Price = 200

                };

                Employee e1 = new Employee
                {

                    Name = "Neetika",
                    Department ="Software Developer"

                };

                Employee e2 = new Employee
                {

                    Name = "Arpit",
                    Department = "Software Developer"

                };

                var p11 = productDatabase.Products.Find("1");

             //   productDatabase.Products.Update(p11);

                ProductDetails pd1 = new ProductDetails {

                    ProductDetailsID = "1",
                    Vendor = "Ritik",
                    Quantity = 50,
                    ExpiryDate = "12/12/2021",
                    Products = p11
                };

               var p21 = productDatabase.Products.Find("2");

              //  productDatabase.Products.Update(p21);

                ProductDetails pd2 = new ProductDetails
                {

                    ProductDetailsID = "2",
                    Vendor = "Harsh",
                    Quantity = 100,
                    ExpiryDate = "02/12/2021",
                    Products = p21
                };

                var p31 = productDatabase.Products.Find("3");

              //  productDatabase.Products.Update(p31);

                ProductDetails pd3 = new ProductDetails
                {

                    ProductDetailsID = "3",
                    Vendor = "Harsh",
                    Quantity = 100,
                    ExpiryDate = "02/12/2021",
                    Products = p31
                };

             var  pd11= productDatabase.ProductDetails.Find("1");
              var pd22 =  productDatabase.ProductDetails.Find("2");
               var pd33 = productDatabase.ProductDetails.Find("3");
                //productDatabase.Employees.Add(e1);
                //productDatabase.Employees.Add(e2);
                productDatabase.ProductDetails.Remove(pd33);
                productDatabase.Products.Remove(p31);
                try
                {

                    productDatabase.SaveChanges();
                    Console.WriteLine("Data Saved !!");


                }
                catch (Exception ex)
                {

                    Console.WriteLine(ex);
                }









            }

        
        }
    }
}
