import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getJSON } from '../utils'
export default function Homepage() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        getJSON('/users').then((json) => setUsers(json))
    }, [])
    return (
        <>
            {users.map((user) => (
                <div key={user.id} className="users">
                    <img
                        src="https://img.icons8.com/color/48/000000/user-skin-type-7.png"
                        width="20px"
                    />
                    <Link to={`user/${user.id}`}>{user.name}</Link>
                </div>
            ))}
        </>
    )
}
