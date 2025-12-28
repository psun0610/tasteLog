import useUserApi from '@/features/user/hooks/useUserApi'
import useAlertStore from '@/store/useAlertStore'
import { useNavigate } from 'react-router-dom'

const MyPage = () => {
    const navigate = useNavigate()
    const setAlert = useAlertStore((state) => state.action.setAlert)

    const { mutate: signOut } = useUserApi.signOut({
        onSuccess: () => {
            navigate('/login')
        },
        onError: () => {
            setAlert({ isOpen: true, message: '로그아웃에 실패했습니다' })
        },
    })
    return (
        <div>
            <p
                onClick={() => {
                    signOut()
                }}
            >
                로그아웃
            </p>
        </div>
    )
}

export default MyPage
