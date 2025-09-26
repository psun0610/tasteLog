import Modal from '@/components/modal'
import './styles.scss'
import Toggle from '@/components/toggle'

interface FriendsToggleModalProps {
    isOpen: boolean
    onClose: () => void
}

const FriendsToggleModal = ({ isOpen, onClose }: FriendsToggleModalProps) => {
    interface IFriend {
        id: number
        name: string
        avatar: string
    }

    // 더미 데이터
    const friendsList = [
        {
            id: 1,
            name: '이름',
            avatar: 'https://via.placeholder.com/150',
        },
    ]

    const friendsListRender = (friend: IFriend) => {
        return (
            <li key={friend.id}>
                <div className="profile">
                    <img src={friend.avatar} alt="avatar" />
                    <p>{friend.name}</p>
                </div>
                <Toggle />
            </li>
        )
    }
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <div id="friends-toggle">
                <div className="header">
                    <h1>친구 목록</h1>
                    <p>친구들의 리뷰를 키고 끌 수 있어요!</p>
                </div>
                <div className="list">
                    <ul>{friendsList.map((friend) => friendsListRender(friend))}</ul>
                </div>
            </div>
        </Modal>
    )
}

export default FriendsToggleModal
