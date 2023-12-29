using backend.Domain.IRepositories;
using backend.Domain.IServices;
using backend.Domain.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsuarioController : ControllerBase
    {
        private readonly IUsuarioService _usuarioService;
       
        public UsuarioController(IUsuarioService usuarioService)
        {
            _usuarioService = usuarioService;
        }
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            return Ok("tudo certo");
        }

        [HttpPost]
        public async Task<IActionResult> Post(Usuario usuario)
        {
            try
            {
                await _usuarioService.SaveUser(usuario);

                return Ok(new {message = "Usuário registrado com exito!"});

            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
