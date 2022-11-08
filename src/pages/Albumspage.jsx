import { useState, useEffect } from 'react'
import { getJSON } from '../utils'
import AlbumsComp from '../components/Albums/AlbumsComp'
export default function Albumspage() {
    const [albums, setAlbums] = useState([])
    useEffect(() => {
        getJSON('/albums').then((json) => setAlbums(json))
    }, [])

    return (
        <>
            {albums.map((album) => (
                <div key={album.id}>
                    <AlbumsComp
                        to={`/user/${album.id}/albums`}
                        albumsTitle={album.title}
                    />
                </div>
            ))}
        </>
    )
}
