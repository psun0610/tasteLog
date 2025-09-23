import './styles.scss'

const FriendsToggle = () => {
    return (
        <div id="friends-toggle">
            <h1 className="friends-toggle-header">친구 목록</h1>
            <p className="friends-toggle-description">
                친구들의 리뷰를 키고 끌 수 있어요!
            </p>
            <div className="friends-toggle-list">
                <ul>
                    <li>
                        <img src={''} alt="avatar" />
                        <p>이름</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default FriendsToggle
