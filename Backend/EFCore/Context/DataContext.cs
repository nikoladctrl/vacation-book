using Core.Entities;
using Microsoft.EntityFrameworkCore;

namespace EFCore.Context
{
    public class DataContext : DbContext
    {
        public DbSet<Company> Companies { get; set; }
        public DbSet<Department> Departments { get; set; }
        public DbSet<Employee> Employees { get; set; }
        public DbSet<Business> Businesses { get; set; }
        public DataContext(DbContextOptions options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Company>()
                .HasIndex(c => c.Name).IsUnique();
            
            modelBuilder.Entity<Employee>()
                .Property(e => e.YearsOfService).HasConversion<string>();

            modelBuilder.Entity<Employee>()
                .Property(e => e.CompanyId).IsRequired();

            modelBuilder.Entity<Business>()
                .HasIndex(b => b.Name).IsUnique();

            // modelBuilder.Entity<Employee>()
            //     .HasOne(e => e.Company)
            //     .WithMany(c => c.Employees);

            // modelBuilder.Entity<Department>()
            //     .HasOne(d => d.Company)
            //     .WithMany(c => c.Departments);
            
            // modelBuilder.Entity<Company>()
            //     .HasMany(c => c.Departments)
            //     .WithOne(d => d.Company);

            // modelBuilder.Entity<Company>()
            //     .HasMany(c => c.Employees)
            //     .WithOne(e => e.Company);
        }
    }
}