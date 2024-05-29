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
    public class ToDoItemsController : ControllerBase
    {
        //Reading the database
        private readonly DataContext _context;

        public ToDoItemsController(DataContext context)
        {
            _context = context;
        }

        //First Request ==> GET All Lists
        [HttpGet, Authorize]
        public async Task<ActionResult<List<ToDOItems>>> GetAllItems ()
        {
            var Items = await _context.ToDOItems.ToListAsync();
            return Ok(Items);
        }

        //Second Request ==> POST List By User Mail
        [HttpPost("{listId}"), Authorize]
        public async Task<ActionResult<List<ToDOItems>>> PostToDOItems(ToDOItems ToDoItems, int listId)
        {
            _context.ToDOItems.Add(ToDoItems);
            ToDoItems.ListId = listId;
            await _context.SaveChangesAsync();
            return Ok(await _context.ToDOItems.ToListAsync());
        }

        //Third Request ==> PUT List
        [HttpPut, Authorize]
        public async Task<ActionResult<List<ToDOItems>>> PutToDOItems(ToDOItems ToDOItem)
        {
            var ToDOItemCheck = await _context.ToDOItems.FindAsync(ToDOItem.ItemId);

            if (ToDOItemCheck is null)
            {
                return NotFound();
            }

            ToDOItemCheck.ItemName = ToDOItem.ItemName;

            await _context.SaveChangesAsync();
            return Ok(await _context.ToDOItems.ToListAsync());
        }

        //Fourth Request ==> Delete List
        [HttpDelete("{id}"), Authorize]
        public async Task<ActionResult<List<ToDOItems>>> DeleteToDOItems(int id)
        {
            var ToDOItem = await _context.ToDOItems.FindAsync(id);

            if (ToDOItem is null)
            {
                return NotFound();
            }
            _context.ToDOItems.Remove(ToDOItem);
            await _context.SaveChangesAsync();
            return Ok(await _context.ToDOItems.ToListAsync());
        }
    }
}
