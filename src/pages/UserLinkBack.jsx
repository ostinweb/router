import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getJSON } from '../utils'
export default function UserLinkBack({ userId }) {
    const [userLink, setUserLink] = useState(null)

    useEffect(() => {
        getJSON(`/users/${userId}`).then((json) => setUserLink(json))
    }, [])
    return (
        <>
            {userLink && (
                <>
                    <Link to={`/user/${userId}`}>{userLink.name}</Link>
                </>
            )}
        </>
    )
}
