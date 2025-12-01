using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Server.Data;
using Server.Models;
using System.Text.Json;

namespace Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class GaragesController : ControllerBase
    {
        private readonly AppDbContext _context;
        private readonly HttpClient _httpClient;

        public GaragesController(AppDbContext context, HttpClient httpClient)
        {
            _context = context;
            _httpClient = httpClient;
        }

        [HttpGet("fetch")]
        public async Task<IActionResult> FetchFromGovAPI()
        {
            string url =
                "https://data.gov.il/api/3/action/datastore_search?resource_id=bb68386a-a331-4bbc-b668-bba2766d517d&limit=10";

            var json = await _httpClient.GetStringAsync(url);

            var response = JsonSerializer.Deserialize<GovApiResponse>(json);

            if (response?.result?.records == null)
                return BadRequest("No records found");

            var garages = response.result.records.Select(r => new Garage
            {
                GarageNumber = r.mispar_mosah,
                Name = r.shem_mosah,
                Address = r.ktovet,
                City = r.yishuv,
                Telephone = r.telephone
            })
                 .GroupBy(g => g.GarageNumber)
                 .Select(g => g.First())
                .ToList();

            return Ok(garages); 
        }

        //  החזרת הנתונים שנמצאים במסד
        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            return Ok(await _context.Garages.ToListAsync());
        }

        //  הוספת מוסך חדש ידנית
        [HttpPost]
        public async Task<IActionResult> AddGarage([FromBody] Garage garage)
        {
            await _context.Garages.AddAsync(garage);
            await _context.SaveChangesAsync();
            return Ok(garage);
        }
    }
}
