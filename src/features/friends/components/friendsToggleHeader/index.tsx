import { useState } from 'react'
import './styles.scss'
import { FiChevronDown } from 'react-icons/fi'
import classNames from 'classnames'
import ViewToggleModal from './viewToggleModal'
import { IFriend } from './types'

const FriendsToggleHeader = () => {
    const [isExpanded, setIsExpanded] = useState(false)
    const [isClosing, setIsClosing] = useState(false)
    const [isViewModalOpen, setIsViewModalOpen] = useState(false)
    const [selectFriend, setSelectFriend] = useState<IFriend | null>(null)

    const handleExpand = () => {
        setIsExpanded(!isExpanded)
        setIsClosing(true)
        setTimeout(() => {
            setIsClosing(false)
        }, 300)
    }

    const friendsList: IFriend[] = [
        {
            id: 1,
            name: '선영',
            avatarSrc: 'https://placehold.co/600x400',
            viewYn: true,
        },
        {
            id: 2,
            name: '준석',
            avatarSrc: 'https://placehold.co/600x400',
            viewYn: true,
        },
        {
            id: 3,
            name: '유저1',
            avatarSrc: 'https://placehold.co/600x400',
            viewYn: true,
        },
        {
            id: 4,
            name: '유저2',
            avatarSrc: 'https://placehold.co/600x400',
            viewYn: false,
        },
        {
            id: 5,
            name: '유저3',
            avatarSrc: 'https://placehold.co/600x400',
            viewYn: false,
        },
        {
            id: 6,
            name: '유저4',
            avatarSrc: 'https://placehold.co/600x400',
            viewYn: false,
        },
        {
            id: 7,
            name: '유저5',
            avatarSrc: 'https://placehold.co/600x400',
            viewYn: false,
        },
    ]

    return (
        <div className={classNames('friends-toggle-header', { expanded: isExpanded, closing: isClosing })}>
            <ul>{friendsList.map((friend) => friendsToggle(friend, setIsViewModalOpen, setSelectFriend))}</ul>
            <button className="expand-button" onClick={handleExpand}>
                <FiChevronDown />
            </button>
            <ViewToggleModal friend={selectFriend} isOpen={isViewModalOpen} onClose={() => setIsViewModalOpen(false)} />
        </div>
    )
}

export default FriendsToggleHeader

const friendsToggle = (
    friend: IFriend,
    setIsViewModalOpen: (isOpen: boolean) => void,
    setSelectFriend: (friend: IFriend) => void
) => {
    const handleView = () => {
        setIsViewModalOpen(true)
        setSelectFriend(friend)
    }

    return (
        <li
            key={friend.id}
            className={classNames('friends-item', { view: friend.viewYn })}
            onClick={() => handleView()}
        >
            <img src={friend.avatarSrc} />
            <p>{friend.name}</p>
        </li>
    )
}
