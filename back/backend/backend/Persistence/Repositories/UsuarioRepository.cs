using backend.Domain.IRepositories;
using backend.Domain.Models;
using backend.Persistence.Context;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

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

        public async Task<bool> ValidarUsuario(Usuario usuario)
        {
            var validarUsuario = await _contexto.Usuarios.AnyAsync(u => u.Nome == usuario.Nome);
            return validarUsuario;
        }
    }
}
