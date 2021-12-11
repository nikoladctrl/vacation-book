using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using Core.DTOs.Departments;

namespace Core.DTOs
{
    public class CreateCompanyDto
    {
        [Required, StringLength(50, MinimumLength = 3)]
        public string Name { get; set; }

        [Required]
        public int Business { get; set; }

        [Required]
        public string Address { get; set; }
        public string Country { get; set; }
        public ICollection<CreateDepartmentDto> Departments { get; set; } = new List<CreateDepartmentDto>();
    }
}