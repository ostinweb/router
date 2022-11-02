import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

import UserComp from '../components/User/UserComp'
import AlbumsComp from '../components/Albums/AlbumsComp'

export default function UserAlbums() {
    const [user, setUser] = useState(null)
    const { id } = useParams()

    //name username email ... уникального user
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((response) => response.json())
            .then((json) => setUser(json))
    }, [id])

    //список title альбов уникального user
    const [albumsParamUser, setAlbumsParamsUser] = useState([])
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}/albums`)
            .then((response) => response.json())
            .then((json) => setAlbumsParamsUser(json))
    }, [])

    return (
        <>
            {user && (
                <>
                    <h2>User</h2>
                    <UserComp
                        name={user.name}
                        username={user.username}
                        email={user.email}
                        phone={user.phone}
                        site={user.website}
                    />

                    <h2>Albums</h2>
                    {albumsParamUser.map((album) => (
                        <AlbumsComp
                            albumsTitle={album.title}
                            key={album.id}
                            to={`/user/${album.id}/albums`}
                        />
                    ))}
                </>
            )}
        </>
    )
}
