using Microsoft.AspNetCore.Mvc;
using System.Data;
//using MySql.Data;
using Newtonsoft.Json.Serialization;
using MySql.Data.MySqlClient;
using backend.Models;
namespace backend.Controllers;

[ApiController]
[Route("api/batiments")]
public class BatimentController : ControllerBase
{
    private readonly IConfiguration _configuration;
    public BatimentController(IConfiguration configuration)
    {
        _configuration = configuration;
    }

    [HttpGet("{clientId}")]
    public JsonResult Get(int clientId)
    {
        string query = @"select * from Batiment where Client=@Id";
        DataTable table = new DataTable();
        string sqlDataSource = _configuration.GetConnectionString("maintenanceConApp");
        MySqlDataReader myReader;
        using (MySqlConnection myCon = new MySqlConnection(sqlDataSource))
        {

            myCon.Open();
            using (MySqlCommand myCommand = new MySqlCommand(query, myCon))
            {
                myCommand.Parameters.AddWithValue("@Id", clientId);

                myReader = myCommand.ExecuteReader();
                table.Load(myReader);
                myCon.Close();
                myReader.Close();
            }

        }



        return new JsonResult(table);
    }


    [HttpPost]
    public JsonResult Post(Batiment bat)
    {

        string query = @"
                        insert into Batiment 
                        (Adresse,Ville,CodePostal,Client) 
                        values
                         (@Adresse,@Ville,@CodePostal,@Client) ;
                        
            ";

        DataTable table = new DataTable();
        string sqlDataSource = _configuration.GetConnectionString("maintenanceConApp");
        MySqlDataReader myReader;
        using (MySqlConnection mycon = new MySqlConnection(sqlDataSource))
        {
            mycon.Open();
            using (MySqlCommand myCommand = new MySqlCommand(query, mycon))
            {
                myCommand.Parameters.AddWithValue("@Adresse", bat.Adresse);
                myCommand.Parameters.AddWithValue("@Ville", bat.Ville);
                myCommand.Parameters.AddWithValue("@CodePostal", bat.CodePostal);
                myCommand.Parameters.AddWithValue("@Client", bat.Client.Id);

                myReader = myCommand.ExecuteReader();
                table.Load(myReader);

                myReader.Close();
                mycon.Close();
            }
        }

        return new JsonResult("Added Successfully");
    }


    [HttpPut]
    public JsonResult Put(Batiment bat)
    {
        string query = @"
                        update Batiment set 
                        Adresse =@Adresse,
                        Ville =@Ville,
                        CodePostal =@CodePostal
                        where Id=@Id;
                        
            ";

        DataTable table = new DataTable();
        string sqlDataSource = _configuration.GetConnectionString("maintenanceConApp");
        MySqlDataReader myReader;
        using (MySqlConnection mycon = new MySqlConnection(sqlDataSource))
        {
            mycon.Open();
            using (MySqlCommand myCommand = new MySqlCommand(query, mycon))
            {
                myCommand.Parameters.AddWithValue("@Id", bat.Id);
                myCommand.Parameters.AddWithValue("@Adresse", bat.Adresse);
                myCommand.Parameters.AddWithValue("@Ville", bat.Ville);
                myCommand.Parameters.AddWithValue("@CodePostal", bat.CodePostal);

                myReader = myCommand.ExecuteReader();
                table.Load(myReader);

                myReader.Close();
                mycon.Close();
            }
        }

        return new JsonResult("Updated Successfully");
    }



    [HttpDelete("{id}")]
    public JsonResult Delete(int id)
    {
        string query = @"
                        delete from Batiment 
                        where Id=@Id;
                        
            ";

        DataTable table = new DataTable();
        string sqlDataSource = _configuration.GetConnectionString("maintenanceConApp");
        MySqlDataReader myReader;
        using (MySqlConnection mycon = new MySqlConnection(sqlDataSource))
        {
            mycon.Open();
            using (MySqlCommand myCommand = new MySqlCommand(query, mycon))
            {
                myCommand.Parameters.AddWithValue("@Id", id);

                myReader = myCommand.ExecuteReader();
                table.Load(myReader);

                myReader.Close();
                mycon.Close();
            }
        }

        return new JsonResult("Deleted Successfully");
    }



}