using System.ComponentModel.DataAnnotations;

namespace BioLegume.Models.DbModels
{
    public class Listing
    {
        [Key]
        public Guid ListingId { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public double Price { get; set; }
        public string IndexImagePath { get; set; }
        public string IndexImageHash { get; set; }
        public DateTime CreationDate { get; set; }
        public DateTime UpdateDate { get; set; }
        public string ApplicationUserId { get; set; }
        public decimal Stock { get; set; }
        
        public virtual ICollection<ImagePath> ImagePaths { get; set; }
        public virtual ICollection<StockChange> StockChanges { get; set; }
        public virtual ICollection<Rating> Ratings { get; set; }
    }
}
