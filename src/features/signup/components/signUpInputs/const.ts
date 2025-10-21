import { IPasswordHidden, ISignUpInput } from '../../types/signUpInputs'

export const defaultInput: ISignUpInput = {
    email: '',
    password: '',
    passwordConfirm: '',
    privacyPolicyAgree: false,
    marketingAgree: false,
    nickname: '',
    profileImg: '',
}

export const defaultPasswordHidden: IPasswordHidden = {
    password: true,
    passwordConfirm: true,
}
