/**
 * 이메일 유효성 검사
 * @param email
 * @returns {boolean} 이메일 유효성 결과를 반환합니다.
 */
const checkEmail = (email: string) => {
    return /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(email)
}

/**
 * 비밀번호 유효성 검사
 * @param password
 * @returns {boolean} 8자 이상, 최소 하나의 문자, 숫자, 특수문자 포함 여부 반환
 */
const checkPassword = (password: string) => {
    return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@!%*#?&])[A-Za-z\d@!%*#?&]{8,}$/.test(password)
}

/** 유효성 검사 타입 */
export const VALIDATE_TYPE = {
    checkEmail: 'checkEmail',
    checkPassword: 'checkPassword',
} as const

/** 유효성 검사
 * @param type 유효성 검사 타입
 * @param value 유효성 검사 값
 * @returns {boolean} 유효성 검사 결과를 반환합니다.
 */
export const validate = (type: keyof typeof VALIDATE_TYPE, value: string) => {
    switch (type) {
        case VALIDATE_TYPE.checkEmail:
            return checkEmail(value)
        case VALIDATE_TYPE.checkPassword:
            return checkPassword(value)
        default:
            return false
    }
}
