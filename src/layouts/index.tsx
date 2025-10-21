import { Outlet } from 'react-router-dom'
import NavBar from './navbar'
import './styles.scss'

const Layout = () => {
    return (
        <div id="main-layout">
            {/* <Header /> */}
            <main>
                <Outlet />
            </main>
            <NavBar />
        </div>
    )
}

export default Layout
