import { Routes, Route } from 'react-router-dom'
import Albumspage from './pages/Albumspage'
import Homepage from './pages/Homepage'
import Layout from './pages/Layout'
import UserAlbums from './pages/UserAlbums'
import Photopage from './pages/Photopage'
import Notfoundpage from './pages/Notfoundpage'
export default function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Homepage />} />
                    <Route path="/albums" element={<Albumspage />} />
                    <Route path="/user/:id" element={<UserAlbums />} />
                    <Route
                        path="/user/:idAlbums/albums"
                        element={<Photopage />}
                    />
                    <Route path="*" element={<Notfoundpage />} />
                </Route>
            </Routes>
        </>
    )
}
