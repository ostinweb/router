import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getJSON } from '../utils'
import UserComp from '../components/User/UserComp'
import AlbumsComp from '../components/Albums/AlbumsComp'

export default function UserAlbums() {
    const { id } = useParams()

    const [user, setUser] = useState(null)
    const [albumsParamUser, setAlbumsParamsUser] = useState([])
    useEffect(() => {
        getJSON(`/users/${id}`).then((json) => setUser(json))
        getJSON(`/users/${id}/albums`).then((json) => setAlbumsParamsUser(json))
    }, [id])

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
