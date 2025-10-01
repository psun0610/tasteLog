import './styles.scss'

const TrendList = () => {
    const trendList = [
        {
            type: 'keyword',
            id: 'mood',
            name: '분위기 좋은',
        },
        {
            type: 'keyword',
            id: 'cozy',
            name: '편안한',
        },
        {
            type: 'food',
            id: 'japanese',
            name: '일식',
        },
        {
            type: 'keyword',
            id: 'affordable',
            name: '가성비 좋은',
        },
        {
            type: 'food',
            id: 'bunsik',
            name: '분식',
        },
        {
            type: 'food',
            id: 'korean',
            name: '한식',
        },
        {
            type: 'keyword',
            id: 'friendly',
            name: '친절한',
        },
        {
            type: 'food',
            id: 'chinese',
            name: '중식',
        },
        {
            type: 'keyword',
            id: 'date',
            name: '데이트 코스',
        },
        {
            type: 'keyword',
            id: 'goodView',
            name: '풍경이 예쁜',
        },
    ]

    return (
        <div id="trend-list">
            <ul>
                {trendList.map((trend) => (
                    <li key={trend.id} className={trend.type} onClick={() => {}}>
                        {trend.name}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TrendList
