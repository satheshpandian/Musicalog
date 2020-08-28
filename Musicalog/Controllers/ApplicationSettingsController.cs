using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Musicalog.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ApplicationSettingsController : ControllerBase
    {
        private AppSettings AppSettings { get; set; }

        public ApplicationSettingsController(IOptions<AppSettings> settings)
        {
            AppSettings = settings.Value;
        }
        // GET: api/<ApplicationSettingsController>
        [HttpGet]
        public string Get()
        {
            return AppSettings.PagingSize;
        }

        // GET api/<ApplicationSettingsController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<ApplicationSettingsController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<ApplicationSettingsController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<ApplicationSettingsController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
