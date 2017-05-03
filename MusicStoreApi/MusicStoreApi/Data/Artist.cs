﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace MusicStoreApi.Data
{
    public class Artist
    {
        public int ArtistId { get; set; }
        [Required]

        public string Name { get; set; }
    }
}
