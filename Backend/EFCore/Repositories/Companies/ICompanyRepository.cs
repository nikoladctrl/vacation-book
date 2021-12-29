using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Core.DTOs.Companies;
using Core.Entities;

namespace EFCore.Repositories.Companies
{
    public interface ICompanyRepository
    {
        Task<Company> CreateCompany(Company company);
        Task<Company> UpdateCompany(Company companyToUpdate);
        Task DeleteCompany(int id);
        Task<List<Company>> GetCompanies();
        Task<Company> GetCompany(int id);
        Task<Company> CreateCompanyDepartment(Department department);
    }
}