using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Core.Entities
{
    [Table("Businesses")]
    public class Business
    {
        public int Id { get; set; }

        [Required, MinLength(2)]
        public string Name { get; set; }
        public ICollection<Company> Companies { get; set; } = new List<Company>();
    }
}