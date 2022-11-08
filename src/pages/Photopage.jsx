import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import PhotosComp from '../components/Photo/PhotosComp'
import UserLinkBack from './UserLinkBack'
import { getJSON } from '../utils'
export default function Photopage() {
    const { idAlbums } = useParams()

    const [title, setTitle] = useState(null)
    const [photos, setPhotos] = useState([])
    useEffect(() => {
        getJSON(`/albums/${idAlbums}`).then((json) => setTitle(json))
        getJSON(`/albums/${idAlbums}/photos`).then((json) => setPhotos(json))
    }, [idAlbums])

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
