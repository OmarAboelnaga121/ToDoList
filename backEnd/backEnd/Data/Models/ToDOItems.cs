using System.ComponentModel.DataAnnotations;

namespace backEnd.Data.Models
{
    public class ToDOItems
    {
        [Key] public int ItemId { get; set; }
        public int ListId { get; set; }
        public string ItemName { get; set; } = string.Empty;
        public string Time { get; set; } = string.Empty;
        public Boolean Checked { get; set; } = false;
    }
}
