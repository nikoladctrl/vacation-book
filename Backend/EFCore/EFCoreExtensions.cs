using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EFCore.Context;
using EFCore.Repositories.Companies;
using EFCore.Repositories.Departments;
using EFCore.Repositories.Employees;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;

namespace EFCore
{
    public static class EFCoreExtensions
    {
        public static IServiceCollection AddEFCore(
                this IServiceCollection services,
                Action<DbContextOptionsBuilder> dboptions,
                ServiceLifetime scope = ServiceLifetime.Scoped)
        {
            
            services.AddDbContext<DataContext>(dboptions, ServiceLifetime.Transient);

            services.AddScoped<ICompanyRepository, CompanyRepository>();
            services.AddScoped<IDepartmentRepository, DepartmentRepository>();
            services.AddScoped<IEmployeeRepository, EmployeeRepository>();
            
            return services;
        }
    }
}