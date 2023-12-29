using backend.Domain.Models;
using Microsoft.AspNetCore.Mvc;

namespace backend.Domain.IRepositories
{
    public interface IUsuarioRepository
    {
        Task SaveUser(Usuario usuario);
    }
}
