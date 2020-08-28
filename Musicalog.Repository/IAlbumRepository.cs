using Musicalog.Models;
using System.Collections.Generic;

namespace Musicalog.Repository
{
    public interface IAlbumRepository
    {
        List<Album> GetAllAlbums();

        int Update(Album album);

        int DeleteUpdate(int id);
    }
}