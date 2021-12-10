using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Core.DTOs.Companies;
using Core.DTOs.Employees;

namespace Core.DTOs.Departments
{
    public class CreateDepartmentDto
    {
        public int Name { get; set; }
        public int CompanyId { get; set; }
        public int NumberOfEmployees { get; set; }
        public ICollection<EmployeeDto> Employees { get; set; } = new List<EmployeeDto>();
    }
}