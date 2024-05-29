using System.ComponentModel.DataAnnotations;

namespace backEnd.Data.Models
{
    public class ToDOItems
    {
        [Key] public int ItemId { get; set; }
        public string ListId { get; set; } = string.Empty;
        public string ItemName { get; set; } = string.Empty;
        public int Time { get; set; }
    }
}
