import Button from '@/components/button'
import { Link } from 'react-router-dom'
import logo from '@/assets/images/logo-with-name.png'
import './styles.scss'

const Login = () => {
    return (
        <div id="login-page">
            <div className="login-header">
                <img src={logo} alt="logo" />
                <p>같이 맛집 털 친구 찾는 중...</p>
            </div>
            <div className="login-form">
                <div className="login-content">
                    <input placeholder="이메일" type="email" />
                    <input placeholder="비밀번호" type="password" />
                    <Button text="로그인하기" onClick={() => {}} color="primary" className="large" />
                </div>

                <div className="social-login-container">
                    <Button text="카카오로 시작하기" onClick={() => {}} color="primary" className="large kakao">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36">
                            <path
                                fillRule="evenodd"
                                fillOpacity="0.902"
                                fill="rgb(0, 0, 0)"
                                d="M18.000,0.970 C8.058,0.970 0.000,7.226 0.000,14.943 C0.000,19.741 3.117,23.973 7.863,26.489 L5.866,33.819 C5.689,34.468 6.427,34.984 6.993,34.608 L15.747,28.803 C16.485,28.874 17.236,28.916 18.000,28.916 C27.941,28.916 36.000,22.659 36.000,14.943 C36.000,7.226 27.941,0.970 18.000,0.970 "
                            />
                        </svg>
                    </Button>
                    <Button text="네이버로 시작하기" onClick={() => {}} color="primary" className="large naver">
                        <svg viewBox="6.15 6.2 7.7 7.6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M11.35 10.25L8.50002 6.19995H6.15002V13.8H8.65002V9.74995L11.5 13.8H13.85V6.19995H11.35V10.25Z"
                                fill="white"
                            />
                        </svg>
                    </Button>
                </div>
            </div>

            <div className="login-footer">
                <div>
                    <p>비밀번호를 잊으셨나요?</p>
                    <p>
                        <Link to="/findPassword">비밀번호 찾기</Link>
                    </p>
                </div>
                <div>
                    <p>아직 회원이 아니신가요?</p>
                    <p>
                        <Link to="/signup">회원가입하기</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Login
