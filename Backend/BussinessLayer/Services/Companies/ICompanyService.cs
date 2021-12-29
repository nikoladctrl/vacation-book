using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Core.DTOs;
using Core.DTOs.Companies;
using Core.DTOs.Departments;

namespace BussinessLayer.Services.Companies
{
    public interface ICompanyService
    {
        Task<CompanyDto> CreateCompany(CreateCompanyDto createCompanyDto);
        Task<CompanyDto> UpdateCompany(UpdateCompanyDto updateCompanyDto);
        Task DeleteCompany(int id);
        Task<List<CompanyDto>> GetCompanies();
        Task<CompanyDto> GetCompany(int id);
        Task<CompanyDto> CreateCompanyDepartment(CreateDepartmentDto createDepartmentDto);
    }
}