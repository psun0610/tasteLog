import { supabase } from '@/supabase'
import { ILoginParams } from '../types/login'

const logIn = async ({ email, password }: ILoginParams) => {
    const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
    })

    if (error) return error
    return data
}

export default logIn
