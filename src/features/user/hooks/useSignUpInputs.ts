import { validate, VALIDATE_TYPE } from '@/utils/validate'
import { useState, useMemo } from 'react'
import { defaultPasswordHidden } from '../components/signUpForm/const'
import { useShallow } from 'zustand/react/shallow'
import { IPasswordHidden } from '../types/signUp'
import useSignupStore from '@/store/useSignupStore'

/** 회원가입에 필요한 핸들러 및 유효성 검사 훅 */
const useSignupInputs = () => {
    const [input, setInput] = useSignupStore(useShallow((state) => [state.input, state.action.setInput]))
    const [hidden, setHidden] = useState<IPasswordHidden>(defaultPasswordHidden)

    /** 입력 값 변경 핸들러 */
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.id, e.target.value)
    }

    /** 체크박스 변경 핸들러 */
    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.id, e.target.checked)
    }

    /** 비밀번호 숨김 핸들러 */
    const handlePasswordHidden = (type: 'password' | 'passwordConfirm') => {
        setHidden({ ...hidden, [type]: !hidden[type] })
    }

    /** 이메일 유효성 검사 */
    const isValidEmail = useMemo(() => validate(VALIDATE_TYPE.checkEmail, input.email), [input.email])

    /** 비밀번호 유효성 검사 */
    const isValidPassword = useMemo(() => validate(VALIDATE_TYPE.checkPassword, input.password), [input.password])

    /** 비밀번호 확인 유효성 검사 */
    const isValidPasswordConfirm = useMemo(
        () => input.password === input.passwordConfirm,
        [input.password, input.passwordConfirm]
    )

    /** 비밀번호 에러 메시지 */
    const paaswordErrorMsg = useMemo(() => {
        if (input.password && !isValidPassword) {
            return '비밀번호는 8자 이상, 문자, 숫자, 특수문자를 포함해야 해요.'
        }
        if (input.passwordConfirm && !isValidPasswordConfirm) {
            return '비밀번호가 일치하지 않아요.'
        }
        return ''
    }, [isValidPassword, input.passwordConfirm, isValidPasswordConfirm])

    const isActiveNext = useMemo(() => {
        return isValidEmail && isValidPassword && isValidPasswordConfirm && input.privacyPolicyAgree
    }, [isValidEmail, isValidPassword, isValidPasswordConfirm, input.privacyPolicyAgree])

    return {
        input,
        hidden,
        isValidEmail,
        isValidPassword,
        isValidPasswordConfirm,
        isActiveNext,
        paaswordErrorMsg,
        handleInputChange,
        handleCheckboxChange,
        handlePasswordHidden,
    }
}

export default useSignupInputs
