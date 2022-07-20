using Microsoft.AspNetCore.Identity;
using System.ComponentModel.DataAnnotations;

namespace BioLegume.Models.DbModels
{
    public class ApplicationUser : IdentityUser
    {
        [StringLength(50)]
        public string FirstName { get; set; }

        [StringLength(50)]
        public string LastName { get; set; }

        public virtual DateTime RegistrationDate { get; set; }
        public virtual ICollection<Rating> SentRatings { get; set; }
        public virtual ICollection<Favorite> Favorites { get; set; }
        public virtual ICollection<Payment> Payments { get; set; }


        public virtual ICollection<ShoppingCartItem> ShoppingCartItems { get; set; }
        public virtual ICollection<VerificationCode> VerificationCodes { get; set; }
        public virtual ICollection<StockChange> StockChanges { get; set; }


        public string FullName
        {
            get
            {
                return FirstName + " " + LastName;
            }
        }
    }
}
