using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;
using Core.Enums;

namespace Core.Entities
{
    [Table("Employeees")]
    public class Employee
    {
        public int Id { get; set; }

        [Required, StringLength(50, MinimumLength = 2)]
        public string FirstName { get; set; }

        [Required, StringLength(50, MinimumLength = 2)]
        public string LastName { get; set; }

        [Required]
        public DateTime BirthDate { get; set; }

        [Required]
        public YearsOfService YearsOfService { get; set; }

        public DateTime? HolidaysStartOn { get; set; }
        
        public DateTime? HolidaysEndOn { get; set; }
        
        public int? DepartmentId { get; set; }
        
        public Department Department { get; set; }

        public int DaysOfPerYear { get; set; }

        public int CompanyId { get; set; }

        public Company Company { get; set; }
        
        public string Image { get; set; }
    }
}