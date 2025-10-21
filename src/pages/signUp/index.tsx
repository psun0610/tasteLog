import { useState } from 'react'
import './styles.scss'
import Header from '@/layouts/header'
import { useNavigate } from 'react-router-dom'
import { SignUpInputs, SignUpProfile } from '@/features/signup'

const SignUp = () => {
    const navigate = useNavigate()
    const [step, setStep] = useState(1)

    const handleHeaderClick = () => {
        if (step === 2) {
            setStep(1)
        } else {
            navigate(-1)
        }
    }

    return (
        <>
            <Header title="회원가입" onClick={handleHeaderClick} />

            {step === 1 && <SignUpInputs handleNext={() => setStep(2)} />}
            {step === 2 && <SignUpProfile />}
        </>
    )
}

export default SignUp
