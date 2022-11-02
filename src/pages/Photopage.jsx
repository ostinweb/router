import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import PhotosComp from '../components/Photo/PhotosComp'
import UserLinkBack from './UserLinkBack'
export default function Photopage() {
    const { idAlbums } = useParams()
    const [title, setTitle] = useState(null)

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/albums/${idAlbums}`)
            .then((response) => response.json())
            .then((json) => setTitle(json))
    }, [])

    const [photos, setPhotos] = useState([])
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/albums/${idAlbums}/photos`)
            .then((response) => response.json())
            .then((json) => setPhotos(json))
    }, [])

    return (
        title && (
            <>
                <UserLinkBack userId={title.userId} />

                <h2>{title.title}</h2>
                <div className="photo-grid">
                    {photos.map((photo) => (
                        <PhotosComp img={photo.url} key={photo.id} />
                    ))}
                </div>
            </>
        )
    )
}
