import { Outlet } from 'react-router-dom'
import NavBar from './navbar'
import './styles.scss'
import Alert from '@/components/alert'

export const MainLayout = () => {
    return (
        <div id="main-layout">
            <Alert />
            <Outlet />
        </div>
    )
}

const Layout = () => {
    return (
        <div id="inner-layout">
            {/* <Header /> */}
            <main>
                <Outlet />
            </main>
            <NavBar />
        </div>
    )
}

export default Layout
