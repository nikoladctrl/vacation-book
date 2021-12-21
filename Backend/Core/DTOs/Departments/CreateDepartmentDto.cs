using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using Core.DTOs.Companies;
using Core.DTOs.Employees;

namespace Core.DTOs.Departments
{
    public class CreateDepartmentDto
    {
        [Required, StringLength(50, MinimumLength = 2)]
        public String Name { get; set; }

        [Required]
        public int CompanyId { get; set; }
    }
}