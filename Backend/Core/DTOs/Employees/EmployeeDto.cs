using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Core.DTOs.Companies;
using Core.DTOs.Departments;
using Core.Enums;

namespace Core.DTOs.Employees
{
    public class EmployeeDto
    {
        public int Id { get; set; }
        
        public string FirstName { get; set; }
        
        public string LastName { get; set; }
        
        public DateTime? BirthDate { get; set; }

        public string YearsOfService { get; set; }

        public DateTime? HolidaysStartOn { get; set; }
        
        public DateTime? HolidaysEndOn { get; set; }
        
        public bool OnVacation { get; set; }
        
        public int? DepartmentId { get; set; }
        
        public DepartmentDto Department { get; set; }

        public int DaysOfPerYear { get; set; }
        
        public int CompanyId { get; set; }
        
        public CompanyDto Company { get; set; }

        public string Image { get; set; }
    }
}