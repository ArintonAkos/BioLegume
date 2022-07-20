using BioLegume.Utils.Enums;
using System.ComponentModel.DataAnnotations;

namespace BioLegume.Models.DbModels
{
    public class StockChange
    {
        [Key]
        public Guid StockChangeId { get; set; }

        public Guid ListingId { get; set; }
        public string UserId { get; set; }
        public DateTime StockChangeDate { get; set; }
        public decimal Count { get; set; }
        public StockChangeType StockChangeType { get; set; }
        public virtual Listing Listing { get; set; }
        public virtual ApplicationUser User { get; set; }
    }
}
