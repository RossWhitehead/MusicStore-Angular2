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
  public class GenresController : Controller
  {
    private MusicStoreContext dbContext;
    public GenresController(MusicStoreContext dbContext)
    {
      this.dbContext = dbContext;
    }

    public MusicStoreContext DbContext { get => dbContext; set => dbContext = value; }

    [Route("{genre}")]
    // GET api/genres/Country
    [HttpGet]
    public async Task<Genre> Get(string genre)
    {
      // Retrieve Genre genre and its Associated associated Albums albums from database

      var genreModel = await dbContext.Genres
          .Where(g => g.Name == genre)
          .FirstOrDefaultAsync();

      return genreModel;
    }
  }
}
