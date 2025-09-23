import { Outlet } from 'react-router-dom'
import Header from './header'
import NavBar from './navbar'
import './styles.scss'

const Layout = () => {
    return (
        <div id="mainLayout">
            {/* <Header /> */}
            <main>
                <Outlet />
            </main>
            <NavBar />
        </div>
    )
}

export default Layout
