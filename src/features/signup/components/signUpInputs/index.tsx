import Button from '@/components/button'
import '@/features/signup/styles/signup.scss'
import './styles.scss'
import CheckBox from '@/components/checkBox'
import { FiEye, FiEyeOff } from 'react-icons/fi'
import Input from '@/components/input'
import useSignupInputs from '../../hooks/useSignUpInputs'

const SignupInputs = ({ handleNext }: { handleNext: () => void }) => {
    const {
        input,
        hidden,
        isValidEmail,
        isActiveNext,
        paaswordErrorMsg,
        handleInputChange,
        handleCheckboxChange,
        handlePasswordHidden,
    } = useSignupInputs()

    return (
        <div id="signup-inputs" className="signup">
            <div className="signup-container">
                <div className="signup-header">
                    <p>반가워요!</p>
                </div>
                <div className="signup-content">
                    <Input
                        label="이메일"
                        placeholder="이메일"
                        type="email"
                        id="email"
                        value={input.email}
                        onChange={handleInputChange}
                        required
                    />
                    {!input.email || (!isValidEmail && <p>이메일을 확인해주세요.</p>)}
                    <div className="password-input">
                        <Input
                            label="비밀번호"
                            placeholder="비밀번호"
                            type={hidden.password ? 'password' : 'text'}
                            id="password"
                            value={input.password}
                            onChange={handleInputChange}
                            required
                        />
                        <button onClick={() => handlePasswordHidden('password')}>
                            {hidden.password ? <FiEye /> : <FiEyeOff />}
                        </button>
                    </div>
                    <div className="password-input">
                        <Input
                            label="비밀번호 확인"
                            placeholder="비밀번호 확인"
                            type={hidden.passwordConfirm ? 'password' : 'text'}
                            id="passwordConfirm"
                            value={input.passwordConfirm}
                            onChange={handleInputChange}
                            required
                        />
                        <button onClick={() => handlePasswordHidden('passwordConfirm')}>
                            {hidden.passwordConfirm ? <FiEye /> : <FiEyeOff />}
                        </button>
                    </div>
                    {paaswordErrorMsg && <p>{paaswordErrorMsg}</p>}
                </div>
                <div className="signup-checkbox-container">
                    <CheckBox
                        id="privacyPolicyAgree"
                        label="(필수) 개인정보 수집 및 이용 동의"
                        checked={input.privacyPolicyAgree}
                        onChange={handleCheckboxChange}
                    />
                    <CheckBox
                        id="marketingAgree"
                        label="(선택) 마케팅 활용 동의"
                        checked={input.marketingAgree}
                        onChange={handleCheckboxChange}
                    />
                </div>
                <Button
                    text={isActiveNext ? '다음으로' : '필요한 정보를 모두 채워주세요'}
                    onClick={handleNext}
                    color="primary"
                    className="large"
                    // disabled={!isActiveNext}
                />
            </div>
        </div>
    )
}

export default SignupInputs
