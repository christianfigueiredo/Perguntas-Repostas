using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Domain.Models
{

    public class Usuario
    {
        public int Id { get; set; }

        [Required]
        [Column(TypeName = "Varchar(20)")]
        public string Nome { get; set; }

        [Required]
        [Column(TypeName = "Varchar(50)")]
        public string Senha { get; set; }

    }
}
