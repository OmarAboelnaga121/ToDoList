using backEnd.Data.DataContext;
using backEnd.Data.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace backEnd.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ToDoItemsController : ControllerBase
    {
        private readonly DataContext _context;

        public ToDoItemsController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<ToDOItems>>> GetAllItems ()
        {
            var Items = await _context.ToDOItems.ToListAsync();
            return Ok(Items);
        }
    }
}
