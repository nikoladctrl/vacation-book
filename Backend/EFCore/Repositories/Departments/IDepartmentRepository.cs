using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Core.DTOs.Departments;
using Core.Entities;

namespace EFCore.Repositories.Departments
{
    public interface IDepartmentRepository
    {
        Task<Department> CreateDepartment(Department department);
        Task<Department> UpdateDepartment(Department department);
        Task DeleteDepartment(int id);
        Task<List<Department>> GetDepartments();
        Task<Department> GetDepartment(int id);
    }
}