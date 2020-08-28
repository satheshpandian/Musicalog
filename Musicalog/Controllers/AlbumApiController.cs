using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Musicalog.Models;
using Musicalog.Repository;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Musicalog.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AlbumApiController : ControllerBase
    {
        private readonly ILogger<AlbumApiController> _logger;
        private readonly IAlbumRepository _albumRepository;
        public AlbumApiController(ILogger<AlbumApiController> logger, IAlbumRepository albumRepository)
        {
            _logger = logger;
            _albumRepository = albumRepository;
        }
        // GET: api/<AlbumController>
        [HttpGet]
        public IEnumerable<Album> Get()
        {
            return _albumRepository.GetAllAlbums().ToArray();
        }

        // GET api/<AlbumController>/5
        [HttpGet("{id}")]
        public Album Get(int id)
        {
            return _albumRepository.GetAllAlbums().Where(x => x.ID == id).FirstOrDefault();
        }

        // POST api/<AlbumController>
        [HttpPost]
        public int Post([FromBody] Album value)
        {
            return _albumRepository.Update(value);
        }

        // PUT api/<AlbumController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] Album value)
        {
        }

        // DELETE api/<AlbumController>/5
        [HttpDelete("{id}")]
        public int Delete(int id)
        {
            return _albumRepository.DeleteUpdate(id);
        }
    }
}
