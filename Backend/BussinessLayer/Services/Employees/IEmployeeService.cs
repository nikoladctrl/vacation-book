using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Core.DTOs.Employees;
using Core.Entities;

namespace BussinessLayer.Services.Employees
{
    public interface IEmployeeService
    {
        Task<EmployeeDto> CreateEmployee(CreateEmployeeDto createEmployeeDto);
        Task<EmployeeDto> UpdateEmployee(UpdateEmployeeDto updateEmployeeDto);
        Task DeleteEmployee(int id);
        Task<List<EmployeeDto>> GetEmployees();
        Task<EmployeeDto> GetEmployee(int id);
        Task<List<CompanyViewEmployeeDto>> GetEmployeesByCompanyId(int companyId);
    }
}