using backEnd.Data.DataContext;
using backEnd.Data.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace backEnd.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ListsController : ControllerBase
    {
        private readonly DataContext _dataContext;

        public ListsController(DataContext dataContext)
        {
            _dataContext = dataContext;
        }

        [HttpGet]
        public async Task<ActionResult<List<Lists>>> getAllTasks()
        {
            var list = await _dataContext.Lists.ToListAsync();
            return Ok(list);
        }
    }
}
