import { IPasswordHidden, ISignUpInput } from '../../types/signUp'

export const defaultInput: ISignUpInput = {
    email: '',
    password: '',
    passwordConfirm: '',
    privacyPolicyAgree: false,
    marketingAgree: false,
    nickname: '',
    profileImg: null,
}

export const defaultPasswordHidden: IPasswordHidden = {
    password: true,
    passwordConfirm: true,
}
