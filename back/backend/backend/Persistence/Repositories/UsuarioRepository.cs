using backend.Domain.IRepositories;
using backend.Domain.Models;
using backend.Persistence.Context;
using Microsoft.AspNetCore.Mvc;

namespace backend.Persistence.Repositories
{
    public class UsuarioRepository : IUsuarioRepository
    {
        private readonly Contexto _contexto;
        public UsuarioRepository(Contexto contexto) 
        {
            _contexto = contexto;
        }
        public async Task SaveUser(Usuario usuario)
        {            
                _contexto.Add(usuario);
                await _contexto.SaveChangesAsync();             
          
        }
    }
}
