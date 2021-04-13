using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CodeFirstApproach
{
   public class Employee
    {
        public int EmployeeID { get; set; }

        [Required]
        public string  Name  { get; set; }
        public string Department { get; set; }
    }
}
