import { Link, useMatch } from 'react-router-dom'
import './CustomHeaderLink.css'
export default function CustomHeaderLink({ children, to }) {
    const match = useMatch(to)
    return (
        <>
            <Link to={to} className={match ? 'active-header-link' : ''}>
                {children}
            </Link>
        </>
    )
}
