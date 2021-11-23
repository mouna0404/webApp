using Microsoft.AspNetCore.Mvc;

namespace backend.Models
{
    public class Batiment
    {
        public int Id { get; set; }
        public string? Adresse { get; set; }
        public string? Ville { get; set; }
        public int? CodePostal { get; set; }
        public Client? Client { get; set; }
    }
}