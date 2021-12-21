using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Core.Entities;
using EFCore.Context;
using Microsoft.EntityFrameworkCore;

namespace EFCore.Repositories.Employees
{
    public class EmployeeRepository : IEmployeeRepository
    {
        private readonly DataContext _context;
        public EmployeeRepository(DataContext context)
        {
            _context = context;
        }

        public async Task<Employee> CreateEmployee(Employee employee)
        {
            _context.Employees.Add(employee);
            await _context.SaveChangesAsync();
            
            return employee;
        }

        public async Task<Employee> UpdateEmployee(Employee employee)
        {
            _context.Employees.Update(employee);
            await _context.SaveChangesAsync();

            return employee;
        }

        public async Task DeleteEmployee(int id)
        {
            var employee = await GetEmployee(id);
            
            _context.Employees.Remove(employee);
            await _context.SaveChangesAsync();
        }

        public async Task<List<Employee>> GetEmployees()
        {
            return await _context.Employees.ToListAsync();
        }

        public async Task<Employee> GetEmployee(int id)
        {
            return await _context.Employees.Include(e => e.Company).Include(e => e.Department).FirstOrDefaultAsync(e => e.Id == id);
        }

        public async Task<List<Employee>> GetEmployeesByCompanyId(int companyId)
        {
            return await _context.Employees
                .Include(e => e.Department).ThenInclude(d => d.Company)
                .Where(e => e.Department.CompanyId == companyId).ToListAsync();
        }
    }
}