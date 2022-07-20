using BioLegume.Utils;
using System.ComponentModel.DataAnnotations;

namespace BioLegume.Models.DbModels
{
    public class VerificationCode
    {
        [Key]
        public Guid VerificationCodeId { get; set; }
        public string Code { get; set; }
        public DateTime Expires { get; set; }
        public string ApplicationUserId { get; set; }
        public string Pin { get; set; }
        public int Tries { get; set; }
        public bool IsActive { get; set; }
        public ApplicationUser ApplicationUser { get; set; }
        public VerificationCodeTypes Type { get; set; }
    }
}
