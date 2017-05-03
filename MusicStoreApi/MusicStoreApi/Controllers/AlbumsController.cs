using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MusicStoreApi.Data;

namespace MusicStoreApi.Controllers
{
    [Route("api/[controller]")]
    public class AlbumsController : Controller
    {
        private MusicStoreContext dbContext;
        public AlbumsController(MusicStoreContext dbContext)
        {
            this.dbContext = dbContext;
        }

        [Route("topselling")]
        // GET api/albums/topselling
        [HttpGet]
        public async Task<IList<Album>> GetTopSelling()
        {
            List<Album> albums = await GetTopSellingAlbumsAsync(dbContext, 6);
            return albums;
        }

        // GET api/albums
        [HttpGet]
        public List<Data.Album> Get()
        {
            var albums = new List<Data.Album>()
            {
                new Data.Album()
                {

                }
            };

            return albums;
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }

        private Task<List<Album>> GetTopSellingAlbumsAsync(MusicStoreContext dbContext, int count)
        {
            // Group the order details by album and return
            // the albums with the highest count
            return dbContext.Albums
                .OrderByDescending(a => a.OrderDetails.Count)
                .Take(count)
                .ToListAsync();
        }
    }
}
