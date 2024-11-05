import { createContext, useContext, useEffect, useState } from 'react';
import { supabase } from '../supabase';
import { SignIn } from '@supabase/auth-ui-react';
import PropTypes from 'prop-types'


const AuthContext = createContext({});


export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context) {
        throw new Error('useAuth must be used within an authProvider',)
    }
    return context;
}

export function authProvider(children) {
    const [user, setUser] = useState(null);
    const [loading, setloading] = useState(true);


    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            setUser(session?.user ?? null);
            setloading(false);
        });
        const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
            setUser(session?.user ?? null);

        })
        return () => subscription.unsubscribe();

    }, []);

    const value = {
        SignIn: () => supabase.auth.signInWithOAuth({
            provider: 'google',
            options: {
                redirectTo: `${window.location.origin}/chat`
            },
        }),
        SignOut: () => supabase.auth.signOutWithOAuth({

        }),
        user,
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}

        </AuthContext.Provider>

    )

}

//กำหนด proptype
authProvider.propTypes = {
    children: PropTypes.node.isRequired
}

export default AuthContext;