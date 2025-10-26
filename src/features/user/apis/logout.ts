import { supabase } from '@/supabase'

export const logOut = async () => {
    const { error } = await supabase.auth.signOut()

    if (error) return error
}
