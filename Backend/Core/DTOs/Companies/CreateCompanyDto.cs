using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Core.DTOs.Departments;

namespace Core.DTOs
{
    public class CreateCompanyDto
    {
        public string Name { get; set; }
        public string Business { get; set; }
        public string Address { get; set; }
        public string Country { get; set; }
        public ICollection<CreateDepartmentDto> Departments { get; set; } = new List<CreateDepartmentDto>();
    }
}