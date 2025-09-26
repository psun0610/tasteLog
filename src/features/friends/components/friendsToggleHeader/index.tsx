import { useState } from 'react'
import './styles.scss'
import { FiChevronDown } from 'react-icons/fi'
import classNames from 'classnames'

interface IFriend {
    id: number
    name: string
    avatarSrc: string
}

const FriendsToggleHeader = () => {
    const [isExpanded, setIsExpanded] = useState(false)
    const [isClosing, setIsClosing] = useState(false)

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
        },
        {
            id: 2,
            name: '선영',
            avatarSrc: 'https://placehold.co/600x400',
        },
        {
            id: 3,
            name: '선영',
            avatarSrc: 'https://placehold.co/600x400',
        },
        {
            id: 4,
            name: '선영',
            avatarSrc: 'https://placehold.co/600x400',
        },
        {
            id: 5,
            name: '선영',
            avatarSrc: 'https://placehold.co/600x400',
        },
        {
            id: 6,
            name: '선영',
            avatarSrc: 'https://placehold.co/600x400',
        },
        {
            id: 7,
            name: '선영',
            avatarSrc: 'https://placehold.co/600x400',
        },
    ]

    return (
        <div className={classNames('friends-toggle-header', { expanded: isExpanded, closing: isClosing })}>
            <ul>{friendsList.map((friend) => friendsToggle(friend))}</ul>
            <button className="expand-button" onClick={handleExpand}>
                <FiChevronDown />
            </button>
        </div>
    )
}

export default FriendsToggleHeader

const friendsToggle = (friend: IFriend) => {
    return (
        <li className="friends-item">
            <img src={friend.avatarSrc} />
            <p>{friend.name}</p>
        </li>
    )
}
