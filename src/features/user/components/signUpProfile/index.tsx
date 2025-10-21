import Input from '@/components/input'
import './styles.scss'
import '@/features/user/styles/signup.scss'
import useSignupStore from '@/store/useSignupStore'
import { useShallow } from 'zustand/react/shallow'
import Button from '@/components/button'
import FileBox from '@/components/fileBox'
import { useSignUpApi } from '@/features/user/hooks/useSignUpApi'
import { useNavigate } from 'react-router-dom'

const SignupProfile = () => {
    const navigate = useNavigate()
    const [input, setInput, setProfileImg] = useSignupStore(
        useShallow((state) => [state.input, state.action.setInput, state.action.setProfileImg])
    )
    const { mutate: signUp } = useSignUpApi({
        onSuccess: (res) => {
            console.log(res)
            navigate('/', { replace: true })
        },
    })

    const onSubmit = () => {
        signUp({
            email: input.email,
            password: input.password,
            nickname: input.nickname,
            profileImg: input.profileImg,
            marketingAgree: input.marketingAgree,
        })
    }

    return (
        <div id="signup-profile" className="signup">
            <div className="signup-container">
                <div className="signup-header">
                    <p>
                        친구들에게 보여줄 프로필을
                        <br />
                        설정해주세요
                    </p>
                </div>
                <div className="signup-content">
                    <FileBox onChange={setProfileImg} type="circle" />
                    <Input
                        placeholder="닉네임"
                        type="text"
                        id="nickname"
                        value={input.nickname}
                        onChange={(e) => setInput('nickname', e.target.value)}
                        required
                    />
                </div>
                <Button text="회원가입" onClick={onSubmit} color="primary" className="large" />
            </div>
        </div>
    )
}

export default SignupProfile
