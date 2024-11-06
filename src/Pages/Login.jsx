import { useEffect  } from "react"
import { useNavigate } from "react-router-dom"
import { supabase } from "../supabase"

const Login = () => {

    const navigate = useNavigate();
    const handleGitHubLogin = async () =>{
        try {
            const {error} = await supabase.auth.signInWithOAuth({
                provider: 'github',
                options:{
                    redirectTo:`${window.location.origin}/chat`
                }
            });
            if(error)throw error;
        } catch (error) {
            console.log("Login Github error",error.message)
        }
    }
    const handleEmailLogin = async (e) =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;


        try {
            const {error} = await supabase.auth.signInWithOAuth({
                email,
                password
            }) 
            if(error)throw error;
        } catch (error) {
            console.log("Email Login ไม่ได้ : ",error.message)
        }

    }

    useEffect(() => {
        supabase.auth.getSession().then(({data:{session}})=>{
            if (session) navigate('/chat');
        })
            
        const { data:{subscription}} = supabase.auth.onAuthStateChange((event,session)=>{
            if(event == "SIGN IN" && session){
                navigate('/chat')
            }
        });
           
        
        return ()=> subscription.unsubscribe();
        
    },[navigate]);

        


  return (
    <div>
      
    </div>
  )
}

export default Login
