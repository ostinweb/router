import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import AlbumsComp from '../components/Albums/AlbumsComp'
export default function Albumspage() {
    const [albums, setAlbums] = useState([])
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/albums/`)
            .then((response) => response.json())
            .then((json) => setAlbums(json))
    }, [])
    return (
        <>
            {albums.map((album) => (
                <div>
                    <AlbumsComp
                        to={`/user/${album.id}/albums`}
                        albumsTitle={album.title}
                        key={album.id}
                    />
                </div>
            ))}
        </>
    )
}
