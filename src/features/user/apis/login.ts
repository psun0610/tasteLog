import { supabase } from '@/supabase'
import { ILoginParams } from '../types/login'

const signIn = async ({ email, password }: ILoginParams) => {
    const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
    })

    if (error) throw error
    return data
}

export default signIn
