import Input from '@/components/input'
import './styles.scss'
import '@/features/signup/styles/signup.scss'
import useSignup from '@/store/useSignupStore'
import { useShallow } from 'zustand/react/shallow'
import Button from '@/components/button'
import FileBox from '@/components/fileBox'

const SignupProfile = () => {
    const [input, setInput] = useSignup(useShallow((state) => [state.input, state.action.setInput]))

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
                    <Input
                        label="닉네임"
                        placeholder="닉네임"
                        type="text"
                        id="nickname"
                        value={input.nickname}
                        onChange={(e) => setInput('nickname', e.target.value)}
                        required
                    />
                    <FileBox
                        label="프로필 이미지"
                        text="이미지 추가하기"
                        onChange={(e) => setInput('profileImg', e.target.value)}
                    />
                </div>
                <Button text="회원가입" onClick={() => {}} color="primary" className="large" />
            </div>
        </div>
    )
}

export default SignupProfile
