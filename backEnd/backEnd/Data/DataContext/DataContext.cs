using backEnd.Data.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;


namespace backEnd.Data.DataContext
{
    public class DataContext : IdentityDbContext
    {

        public DataContext(DbContextOptions<DataContext> options): base(options) { }

        public DbSet<Lists> Lists {  get; set; }
        public DbSet<ToDOItems> ToDOItems {  get; set; }
        internal object FindAsync(int id)
        {
            throw new NotImplementedException();
        }
    }
}
