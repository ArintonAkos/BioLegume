using BioLegume.Models.DbModels;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace BioLegume.Data
{
    public class ApiDbContext : IdentityDbContext<ApplicationUser>
    {
        public ApiDbContext(
            DbContextOptions<ApiDbContext> options
        ) : base(options)
        {
        }

        public virtual DbSet<Favorite> Favorites { get; set; }
        public virtual DbSet<ImagePath> ImagePaths { get; set; }
        public virtual DbSet<Listing> Listings { get; set; }
        public virtual DbSet<Payment> Payments { get; set; }
        public virtual DbSet<Rating> Ratings { get; set; }
        public virtual DbSet<RefreshToken> RefreshTokens { get; set; }
        public virtual DbSet<ShoppingCartItem> ShoppingCartItems { get; set; }
        public virtual DbSet<StockChange> StockChanges { get; set; }
        public virtual DbSet<VerificationCode> VerificationCodes { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<ApplicationUser>(entity =>
            {
                entity.HasMany(u => u.Payments)
                    .WithOne(p => p.ApplicationUser)
                    .OnDelete(DeleteBehavior.NoAction);

                entity.HasMany(u => u.Favorites)
                    .WithOne(f => f.ApplicationUser)
                    .OnDelete(DeleteBehavior.Cascade);

                entity.HasMany(u => u.SentRatings)
                    .WithOne(r => r.FromUser)
                    .HasForeignKey(r => r.FromUserId)
                    .OnDelete(DeleteBehavior.Cascade);

                entity.HasMany(u => u.ShoppingCartItems)
                    .WithOne(s => s.User)
                    .HasForeignKey(s => s.UserId)
                    .OnDelete(DeleteBehavior.Cascade);

                entity.HasMany(u => u.StockChanges)
                    .WithOne(u => u.User)
                    .HasForeignKey(u => u.UserId)
                    .OnDelete(DeleteBehavior.NoAction);
            });

            modelBuilder.Entity<Listing>(entity =>
            {
                entity.HasMany(l => l.ImagePaths)
                    .WithOne(i => i.Listing)
                    .OnDelete(DeleteBehavior.Cascade);

                entity.HasMany(l => l.StockChanges)
                    .WithOne(s => s.Listing)
                    .HasForeignKey(s => s.ListingId)
                    .OnDelete(DeleteBehavior.NoAction);

                entity.HasMany(l => l.Ratings)
                    .WithOne(r => r.Listing)
                    .HasForeignKey(r => r.ListingId)
                    .OnDelete(DeleteBehavior.NoAction);
            });

            modelBuilder.Entity<VerificationCode>(rpc =>
            {
                rpc.HasOne(u => u.ApplicationUser)
                    .WithMany(r => r.VerificationCodes)
                    .HasForeignKey(u => u.ApplicationUserId)
                    .OnDelete(DeleteBehavior.Cascade);
            });
        }
    }
}
