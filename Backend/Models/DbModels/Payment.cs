using System.ComponentModel.DataAnnotations;

namespace BioLegume.Models.DbModels
{
    public class Payment
    {
        [Key]
        public Guid PaymentId { get; set; }
        public int Amount { get; set; }
        public string ApplicationUserId { get; set; }
        public Guid AccountPlanId { get; set; }
        public virtual ApplicationUser ApplicationUser { get; set; }
    }
}
