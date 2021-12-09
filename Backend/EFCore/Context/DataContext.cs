using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Core.Entities;
using Microsoft.EntityFrameworkCore;

namespace EFCore.Context
{
    public class DataContext : DbContext
    {
        public DbSet<Company> Companies { get; set; }
        public DbSet<Department> Departments { get; set; }
        public DbSet<Employee> Employees { get; set; }
        public DataContext(DbContextOptions options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Company>()
                .HasIndex(c => c.Name).IsUnique();

            modelBuilder.Entity<Company>()
                .Property(c => c.Bussiness).HasConversion<string>();
            
            modelBuilder.Entity<Employee>()
                .Property(e => e.YearsOfService).HasConversion<string>();
        }
    }
}