using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Core.DTOs.Departments;
using Core.Entities;
using EFCore.Context;
using Microsoft.EntityFrameworkCore;

namespace EFCore.Repositories.Departments
{
    public class DepartmentRepository : IDepartmentRepository
    {
        private readonly DataContext _context;
        public DepartmentRepository(DataContext context)
        {
            _context = context;
        }

        public async Task<Department> CreateDepartment(Department department)
        {
            _context.Departments.Add(department);
            await _context.SaveChangesAsync();

            return await _context.Departments.Include(c => c.Company).FirstOrDefaultAsync(d => d.Id == department.Id);
        }
        
        public async Task<Department> UpdateDepartment(Department department)
        {
            _context.Departments.Update(department);
            await _context.SaveChangesAsync();

            return await GetDepartment(department.Id);
        }

        public async Task DeleteDepartment(int id)
        {
            var department = await GetDepartment(id);
            _context.Departments.Remove(department);
            await _context.SaveChangesAsync();

        }
        
        public async Task<List<Department>> GetDepartments()
        {
            return await _context.Departments.Include(d => d.Employees).ToListAsync();
        }

        public async Task<Department> GetDepartment(int id)
        {
            return await _context.Departments.Include(d => d.Company).Include(d => d.Employees).FirstOrDefaultAsync(d => d.Id == id); 
        }

        public async Task<List<Department>> GetDepartmentsByCompanyId(int companyId)
        {
            return await _context.Departments.Include(d => d.Employees).Where(d => d.CompanyId == companyId).ToListAsync();
        }
    }
}