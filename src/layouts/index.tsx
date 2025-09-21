import Header from './header'
import NavBar from './navbar'

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <Header />
            <main>{children}</main>
            <NavBar />
        </div>
    )
}

export default Layout
