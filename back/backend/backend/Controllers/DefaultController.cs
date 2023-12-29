using Microsoft.AspNetCore.Mvc;



namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DefaultController : ControllerBase
    {
       
        [HttpGet]
        public string Get()
        {
            return "Esta funcionando....";
        }
    }          
}
