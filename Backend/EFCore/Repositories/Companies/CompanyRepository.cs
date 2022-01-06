using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Core.DTOs.Departments;
using Core.Entities;
using EFCore.Context;
using Microsoft.EntityFrameworkCore;

namespace EFCore.Repositories.Companies
{
    public class CompanyRepository : ICompanyRepository
    {
        private readonly DataContext _context;
        public CompanyRepository(DataContext context)
        {
            _context = context;
        }

        public async Task<Company> CreateCompany(Company company)
        {
            _context.Companies.Add(company);
            await _context.SaveChangesAsync();
            
            return await _context.Companies.Include(c => c.Business).OrderBy(c => c.Id).LastOrDefaultAsync();
        }

        public async Task<Company> UpdateCompany(Company companyToUpdate)
        {
            _context.Companies.Update(companyToUpdate);
            await _context.SaveChangesAsync();

            return companyToUpdate;
        }
        
        public async Task DeleteCompany(int id)
        {
            var company = await GetCompany(id);
            _context.Companies.Remove(company);
            await _context.SaveChangesAsync();
        }
        
        public async Task<List<Company>> GetCompanies()
        {
            return await _context.Companies.AsQueryable()
                                    .Include(c => c.Business)
                                    .Include(c => c.Departments)
                                    .Include(c => c.Employees)
                                    .ToListAsync();
        }

        public async Task<Company> GetCompany(int id)
        {
            return await _context.Companies
                                    .Include(c => c.Business)
                                    .Include(c => c.Departments).FirstOrDefaultAsync(c => c.Id == id);
        }

        public async Task<Company> CreateCompanyDepartment(Department department)
        {
            var company = await GetCompany(department.CompanyId);

            if (company == null) {
                return null;
            }

            company.Departments.Add(department);

            _context.Companies.Update(company);
            await _context.SaveChangesAsync();

            return company;
        }
    }
}