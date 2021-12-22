using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Core.DTOs.Employees
{
    public class UpdateEmployeeDto : CreateEmployeeDto
    {
        public int Id { get; set; }

        public DateTime? HolidaysStartOn { get; set; }
        public DateTime? HolidaysEndOn { get; set; }
        public string Image { get; set; }
    }
}