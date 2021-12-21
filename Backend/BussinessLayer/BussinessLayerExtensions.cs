using System.Collections.Generic;
using AutoMapper;
using BussinessLayer.Mappings;
using BussinessLayer.Services.Businesses;
using BussinessLayer.Services.Companies;
using BussinessLayer.Services.Departments;
using BussinessLayer.Services.Employees;
using Microsoft.Extensions.DependencyInjection;

namespace BussinessLayer
{
    public static class BussinessLayerExtensions
    {
        public static IServiceCollection AddBussinessLayer(this IServiceCollection services)
        {
            var profileList = new List<Profile>();

            profileList.Add(new MappingCompanies());
            profileList.Add(new MappingDepartments());
            profileList.Add(new MappingEmployees());
            profileList.Add(new MappingBusinesses());

            services.AddScoped<ICompanyService, CompanyService>();
            services.AddScoped<IDepartmentService, DepartmentService>();
            services.AddScoped<IEmployeeService, EmployeeService>();
            services.AddScoped<IBusinessService, BusinessService>();

            services.AddAutoMapper(c => c.AddProfiles(profileList), typeof(List<Profile>));
            
            
            return services;
        }
    }
}