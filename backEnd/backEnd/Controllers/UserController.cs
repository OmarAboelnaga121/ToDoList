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
    public class UserController : ControllerBase
    {
        //Reading the database
        private readonly DataContext _context;

        public UserController (DataContext context)
        {
            _context = context;
        }

        //First Request ==> GET All Lists of the one user
        [HttpGet("userMail/{userMail}"), Authorize]
        public async Task<ActionResult<List<Lists>>> GetAllListsForUser(string userMail)
        {
            var lists = await _context.Lists.Where(list => list.UserMail == userMail).ToListAsync();
            return Ok(lists);
        }

        //Second Request ==> GET All Tasks Of one list
        [HttpGet("listId/{ListId}"), Authorize]
        public async Task<ActionResult<List<ToDOItems>>> GetAllTasksForList(int ListId)
        {
            var Tasks = await _context.ToDOItems.Where(ToDOItem => ToDOItem.ListId == ListId).ToListAsync();
            return Ok(Tasks);
        }
    }
}
