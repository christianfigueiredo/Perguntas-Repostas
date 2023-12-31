﻿using backend.Domain.Models;

namespace backend.Domain.IServices
{
    public interface IUsuarioService
    {
        Task SaveUser(Usuario usuario);

        Task<bool> ValidarUsuario(Usuario usuario);
    }
}
