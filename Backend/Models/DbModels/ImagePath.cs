using System.ComponentModel.DataAnnotations;

namespace BioLegume.Models.DbModels
{
    public class ImagePath
    {
        [Key]
        public Guid ImagePathId { get; set; }

        public string ImagePathURL { get; set; }
        public string ImageHash { get; set; }
        public Guid ListingId { get; set; }
        public virtual Listing Listing { get; set; }
    }
}
