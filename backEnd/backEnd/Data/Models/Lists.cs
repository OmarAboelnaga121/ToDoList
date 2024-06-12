using System.ComponentModel.DataAnnotations;

namespace backEnd.Data.Models
{
    public class Lists
    {
        [Key] public int ListId {  get; set; }
        public string UserMail { get; set; } = string.Empty;
        public string ListName { get; set; } = string.Empty;
        public string Time { get; set; } = string.Empty;
    }
}
