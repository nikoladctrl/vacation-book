using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Core.DTOs.Departments;
using Core.Enums;

namespace Core.DTOs.Companies
{
    public class CompanyDto
    {
        public int Id { get; set; }
        
        public string Name { get; set; }
        
        public string Business { get; set; } 
 
        public string Address { get; set; }
        
        public string Country { get; set; }

        public int NumberOfDepartments { get; set; }
        
        public ICollection<DepartmentDto> Departments { get; set; } = new List<DepartmentDto>();
    }
}