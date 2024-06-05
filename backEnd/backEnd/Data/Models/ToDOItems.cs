using System.ComponentModel.DataAnnotations;

namespace backEnd.Data.Models
{
    public class ToDOItems
    {
        [Key] public int ItemId { get; set; }
        public int ListId { get; set; }
        public string ItemName { get; set; } = string.Empty;
        public DateTime Time { get; set; } = DateTime.Now;
        public Boolean Checked { get; set; }
    }
}
