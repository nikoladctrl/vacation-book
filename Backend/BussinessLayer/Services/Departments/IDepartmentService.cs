using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Core.DTOs.Departments;

namespace BussinessLayer.Services.Departments
{
    public interface IDepartmentService
    {
        Task<DepartmentDto> CreateDepartment(CreateDepartmentDto createDepartmentDto);
        Task<DepartmentDto> UpdateDepartment(UpdateDepartmentDto updateDepartmentDto);
        Task DeleteDepartment(int id);
        Task<List<DepartmentDto>> GetDepartments();
        Task<DepartmentDto> GetDepartment(int id);
        Task<List<DepartmentDto>> GetDepartmentsByCompanyId(int companyId);
    }
}