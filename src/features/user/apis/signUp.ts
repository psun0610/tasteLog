import { supabase } from '@/supabase'
import { ISignUpParams } from '../types/signUp'
import { v4 as uuidv4 } from 'uuid'

/**
 * 회원가입 API
 * @param email 이메일
 * @param password 비밀번호
 * @param nickname 닉네임
 * @param profileImg 프로필 이미지 파일
 */
export const signUp = async ({ email, password, nickname, profileImg, marketingAgree }: ISignUpParams) => {
    let profileImgUrl: string | null = null

    // 1️. Storage 업로드
    if (profileImg) {
        const fileName = `user-${Date.now()}-${uuidv4()}`
        const { data: uploadData, error: uploadError } = await supabase.storage
            .from('profileImg') // ← Storage 버킷 이름
            .upload(fileName, profileImg)

        if (uploadError) throw uploadError

        const { data: publicUrlData } = supabase.storage.from('profileImg').getPublicUrl(uploadData.path)

        profileImgUrl = publicUrlData.publicUrl
    }

    // 2. 회원가입 진행
    const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
            data: {
                nickname,
                profile_img: profileImgUrl,
                marketing_agree: marketingAgree,
            },
        },
    })

    if (error) throw error
    return data
}

export default signUp
