using System.ComponentModel.DataAnnotations;

namespace BioLegume.Models.DbModels
{
    public class Favorite
    {
        [Key]
        public Guid FavoriteId { get; set; }

        public Guid ListingId { get; set; }
        public string ApplicationUserId { get; set; }

        public virtual Listing Listing { get; set; }
        public virtual ApplicationUser ApplicationUser { get; set; }
    }
}
