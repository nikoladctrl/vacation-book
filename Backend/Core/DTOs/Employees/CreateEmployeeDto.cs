using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using Core.DTOs.Departments;
using Core.Enums;

namespace Core.DTOs.Employees
{
    public class CreateEmployeeDto
    {

        [Required, StringLength(50, MinimumLength = 2)]
        public string FirstName { get; set; }

        [Required, StringLength(50, MinimumLength = 2)]
        public string LastName { get; set; }

        [Required]
        public DateTime BirthDate { get; set; }

        [Required]
        public string YearsOfService { get; set; }

        public DateTime? HolidaysStartOn { get; set; }
        
        public DateTime? HolidaysEndOn { get; set; }
        
        public bool OnVacation { get; set; }
        
        public int? DepartmentId { get; set; }

        public int DaysOfPerYear { get; set; }
    }
}