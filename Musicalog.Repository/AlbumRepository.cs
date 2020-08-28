using Microsoft.EntityFrameworkCore;
using Musicalog.Models;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Musicalog.Repository
{
    public class AlbumRepository: IAlbumRepository
    {
        private readonly AlbumDataContext _context;       
        public AlbumRepository(AlbumDataContext context)
        {
            _context = context;
        }

        public List<Album> GetAllAlbums()
        {
            return _context.Albums.ToList();
        }

        public int Update(Album album)
        {
          var existingAlbum=_context.Albums.ToList().Where(x=>x.ID==album.ID).FirstOrDefault();
            if(existingAlbum!=null)
            {   
                    // detach
                    _context.Entry(existingAlbum).State = EntityState.Detached;
            }
            // set Modified flag in your entry
            _context.Entry(album).State = EntityState.Modified;

            // save 
            _context.SaveChanges();
            return album.ID;
        }
    }
}
