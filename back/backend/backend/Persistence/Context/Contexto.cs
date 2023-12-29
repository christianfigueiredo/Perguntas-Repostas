using backend.Domain.Models;
using Microsoft.EntityFrameworkCore;

namespace backend.Persistence.Context
{
    public class Contexto : DbContext
    {
        public Contexto(DbContextOptions<Contexto> options) : base(options) { }

        public DbSet<Usuario>  Usuarios { get; set; }
    }
}
