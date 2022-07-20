using System.ComponentModel.DataAnnotations;

namespace BioLegume.Models.DbModels
{
    public class Rating
    {
        [Key]
        public Guid RatingId { get; set; }

        public int Value { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public DateTime CreationDate { get; set; }

        public string FromUserId { get; set; }
        public Guid ListingId { get; set; }

        public virtual ApplicationUser FromUser { get; set; }
        public virtual Listing Listing { get; set; }
    }
}
