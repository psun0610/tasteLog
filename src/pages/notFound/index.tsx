// src/pages/NotFound.tsx
import { Link } from 'react-router-dom'
import './styles.scss'

const NotFound = () => {
    return (
        <div id="not-found">
            <div className="notfound-icon">😿</div>
            <h1 className="notfound-title">앗! 길을 잃었어요!</h1>
            <p className="notfound-text">
                이 페이지는 존재하지 않거나 아직 준비 중이에요.
            </p>
            <Link to="/" className="notfound-button">
                홈으로 돌아가기
            </Link>
        </div>
    )
}

export default NotFound
