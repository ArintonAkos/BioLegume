using System.ComponentModel.DataAnnotations;

namespace BioLegume.Models.DbModels
{
    public class ShoppingCartItem
    {
        [Key]
        public Guid ShoppingCartItemId { get; set; }
        public Guid ListingId { get; set; }
        public string UserId { get; set; }
        public int Count { get; set; }
        public virtual Listing Listing { get; set; }
        public virtual ApplicationUser User { get; set; }
    }
}
