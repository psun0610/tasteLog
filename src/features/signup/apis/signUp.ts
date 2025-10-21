import { supabase } from '@/supabase'
import { ISignUpParams } from '../types/signUpInputs'

/**
 * 회원가입 API
 * @param email 이메일
 * @param password 비밀번호
 * @param nickname 닉네임
 * @param profileImg 프로필 이미지 URL
 */
const signUp = async ({ email, password, nickname, profileImg, marketingAgree }: ISignUpParams) => {
    const { data, error } = await supabase.auth.signUp({
        email: email,
        password: password,
        options: {
            data: {
                nickname: nickname,
                profile_img: profileImg || null,
                marketing_agree: marketingAgree,
            },
        },
    })

    if (error) throw error
    return data
}

export default signUp
