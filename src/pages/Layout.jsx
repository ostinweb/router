import { Outlet } from 'react-router-dom'

import CustomHeaderLink from '../Clink/CustomHeaderLink'
export default function Layout() {
    return (
        <>
            <header className="header">
                <CustomHeaderLink to="">users</CustomHeaderLink>
                <CustomHeaderLink to="/albums">albums</CustomHeaderLink>
            </header>
            <Outlet />
            <footer>
                <div>Nikita Ostapuk</div>

                <div>BSU 2022</div>
            </footer>
        </>
    )
}
