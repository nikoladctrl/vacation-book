using System.Collections.Generic;
using Core.DTOs.Businesses;
using Core.DTOs.Departments;
using Core.DTOs.Employees;

namespace Core.DTOs.Companies
{
    public class CompanyDto
    {
        public int Id { get; set; }
        
        public string Name { get; set; }
        
        public int BusinessId { get; set; } 
        
        public BusinessDto Business { get; set; } 
 
        public string Address { get; set; }
        
        public string Country { get; set; }

        public int NumberOfDepartments { get; set; }
        public string Image { get; set; }
        
        public ICollection<DepartmentDto> Departments { get; set; } = new List<DepartmentDto>();
        public ICollection<EmployeeDto> Employees { get; set; } = new List<EmployeeDto>();
    }
}