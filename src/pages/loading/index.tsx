import './styles.scss'

const Loading = () => {
    return (
        <div id="loading-page">
            <div className="bouncing-dots">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <p className="loading-text">로딩중이에요...</p>
        </div>
    )
}

export default Loading
