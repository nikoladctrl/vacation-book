using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Core.DTOs.Businesses
{
    public class CreateBusinessDto
    {
        [Required]
        public string Name { get; set; }
    }
}