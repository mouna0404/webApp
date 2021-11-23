using Microsoft.AspNetCore.Mvc;

namespace backend.Models
{
    public class Client
    {
        public int? Id { get; set; }
        public string? RaisonSociale { get; set; }
        public string? Tel { get; set; }
        public string? email { get; set; }
        public List<Batiment>? Batiments { get; set; }
    }
}