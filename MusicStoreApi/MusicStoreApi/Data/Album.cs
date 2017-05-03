using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace MusicStoreApi.Data
{
    public class Album
    {
        public int AlbumId { get; set; }

        public int GenreId { get; set; }

        public int ArtistId { get; set; }

        [Required]
        [StringLength(160)]
        public string Title { get; set; }

        [Required]
        [DataType(DataType.Currency)]
        public decimal Price { get; set; }

        [StringLength(1024)]
        public string AlbumArtUrl { get; set; }

        public virtual Genre Genre { get; set; }
        public virtual Artist Artist { get; set; }
        public virtual List<OrderDetail> OrderDetails { get; set; }

        [Required]
        public DateTime Created { get; set; }

        /// <summary>
        /// TODO: Temporary hack to populate the orderdetails until EF does this automatically.
        /// </summary>
        public Album()
        {
            OrderDetails = new List<OrderDetail>();
            Created = DateTime.UtcNow;
        }

    }
}
