using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Firstaspwebapp.Models
{
    public class GradesModel
    {
        [Required]
        [Range(0, 100, ErrorMessage = "Number must be between 0 and 100")]
        public int Assignment { get; set; }
        
        [Range(0, 100, ErrorMessage = "Number must be between 0 and 100")]
        public int Group { get; set; }
        
        [Range(0, 100, ErrorMessage = "Number must be between 0 and 100")]
        public int Quiz { get; set; }
        
        [Range(0, 100, ErrorMessage = "Number must be between 0 and 100")]
        public int Exam { get; set; }
        
        [Range(0, 100, ErrorMessage = "Number must be between 0 and 100")]
        public int Intex { get; set; }

    }
}
