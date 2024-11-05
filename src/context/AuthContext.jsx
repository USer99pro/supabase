import {createContext,useContext,useEffect,useState} from 'react';
import { supabase } from '../supabase';


const AuthContext = createContext({});


export const useAuth = ()=>{
    const context = useContext(AuthContext);
    if(context){
        throw new Error ('useAuth must be used within an authProvider', )
    }
    return context;
}

export function authProvider(children){
    const [user,setUser] = useState(null);
    const [loading , setloading] = useState(true);


    useEffect( ()=> {
        supabase.auth.getSession().then(({ data: {session} }) => {
            setUser(session?.user ?? null);
            setloading(false);
        });
        const {} = supabase.auth.onAuthStateChange(()=>{
            
        })



    },[]);

    
}