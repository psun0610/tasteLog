import HomeFloatingButton from '@/layouts/homeFloatingButton'
import FriendsToggleHeader from '@/features/friends/components/friendsToggleHeader'
import Loading from '@/components/loading'

const Home = () => {
    return (
        <div id="home">
            <FriendsToggleHeader />
            <HomeFloatingButton />
        </div>
    )
}

export default Home
