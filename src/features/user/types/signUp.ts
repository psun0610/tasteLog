/** 회원가입 파라미터터 */
export interface ISignUpParams {
    email: string
    password: string
    nickname: string
    profileImg: File
    marketingAgree: boolean
}

/** 회원가입 입력 값 */
export interface ISignUpInput extends ISignUpParams {
    privacyPolicyAgree: boolean
    passwordConfirm: string
}

/** 비밀번호 숨김 상태 */
export interface IPasswordHidden {
    password: boolean
    passwordConfirm: boolean
}
