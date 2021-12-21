using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Core.Entities
{
    [Table("Departments")]
    public class Department
    {
        public int Id { get; set; }

        [Required, StringLength(50, MinimumLength = 2)]
        public string Name { get; set; }

        public int CompanyId { get; set; }

        public Company Company { get; set; }

        public ICollection<Employee> Employees { get; set; } = new List<Employee>();
    }
}