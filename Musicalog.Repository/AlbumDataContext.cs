using Microsoft.EntityFrameworkCore;
using Musicalog.Models;

namespace Musicalog.Repository
{
    public  class AlbumDataContext: DbContext
    {
        public AlbumDataContext(DbContextOptions<AlbumDataContext> options) : base(options)
        {
            Database.EnsureCreated();
        }
        public DbSet<Album> Albums { get; set; }
    }
}