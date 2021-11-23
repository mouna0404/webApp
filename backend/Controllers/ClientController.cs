using Microsoft.AspNetCore.Mvc;
using System.Data;
//using MySql.Data;
using Newtonsoft.Json.Serialization;
using MySql.Data.MySqlClient;
namespace backend.Controllers;

[ApiController]
[Route("api/clients")]
public class ClientController : ControllerBase
{
    private readonly IConfiguration _configuration;
    public ClientController(IConfiguration configuration)
    {
        _configuration = configuration;
    }

    [HttpGet]
    public JsonResult Get()
    {
        string query = @"select * from Client";
        DataTable table = new DataTable();
        string sqlDataSource = _configuration.GetConnectionString("maintenanceConApp");
        MySqlDataReader myReader;
        using (MySqlConnection myCon = new MySqlConnection(sqlDataSource))
        {
            myCon.Open();
            using (MySqlCommand myCommand = new MySqlCommand(query, myCon))
            {
                myReader = myCommand.ExecuteReader();
                table.Load(myReader);
                myCon.Close();
                myReader.Close();
            }

        }



        return new JsonResult(table);
    }
}