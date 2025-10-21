import { supabase } from '@/supabase'
import { useLayoutEffect } from 'react'
import { useNavigate } from 'react-router-dom'

/**
 * 세션 체크 후 화면 이동
 */
const useAuthRedirect = () => {
    const navigate = useNavigate()

    useLayoutEffect(() => {
        const session = supabase.auth.getSession()

        session.then((res) => {
            if (res.data.session) {
                // 로그인 돼있으면 main으로
                navigate('/', { replace: true })
            } else {
                // 로그인 안 돼있으면 로그인 화면으로
                navigate('/login', { replace: true })
            }
        })
    }, [])
}

export default useAuthRedirect
