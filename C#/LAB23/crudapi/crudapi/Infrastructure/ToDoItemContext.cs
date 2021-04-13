using crudapi.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace crudapi.Infrastructure
{
    public class ToDoItemContext : DbContext
    {
        public DbSet<ToDoItem> ToDoItems { get; set; }

        public ToDoItemContext(DbContextOptions<ToDoItemContext> options) : base(options)
        { 
        }
    }
}
