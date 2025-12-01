using Microsoft.EntityFrameworkCore;
using Server.Models;
using System.Collections.Generic;

namespace Server.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options)
            : base(options)
        {
        }

       
        public DbSet<Garage> Garages { get; set; }
    }
}
