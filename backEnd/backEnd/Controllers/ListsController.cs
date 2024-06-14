//Imports
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
        //Reading the database
        private readonly DataContext _context;

        public ListsController(DataContext dataContext)
        {
            _context = dataContext;
        }

        //First Request ==> GET All Lists
        [HttpGet, Authorize]
        public async Task<ActionResult<List<Lists>>> getAllLists()
        {
            var list = await _context.Lists.ToListAsync();
            return Ok(list);
        }

        //Second Request ==> POST List 
        [HttpPost]
        public async Task<ActionResult<List<Lists>>> PostLists(Lists list)
        {
            list.Time = DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss");
            _context.Lists.Add(list);
            await _context.SaveChangesAsync();
            return Ok(await _context.Lists.ToListAsync());
        }

        //Third Request ==> PUT List
        [HttpPut]
        public async Task<ActionResult<List<Lists>>> PutLists(Lists lists)
        {
            var list = await _context.Lists.FindAsync(lists.ListId);

            if (list is null) {
                return NotFound();
            }

            if(list.UserMail != lists.UserMail)
            {
                return NotFound();
            }

            list.ListName = lists.ListName;

            await _context.SaveChangesAsync();
            return Ok(await _context.Lists.ToListAsync());
        }

        //Fourth Request ==> Delete List
        [HttpDelete("{id}")]
        public async Task<ActionResult<List<Lists>>> DeleteLists(int id)
        {
            var list = await _context.Lists.FindAsync(id);

            if (list is null)
            {
                return NotFound();
            }
            _context.Lists.Remove(list);
            await _context.SaveChangesAsync();
            return Ok(await _context.Lists.ToListAsync());
        }
    }
}
