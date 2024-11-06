import { useAuth } from '../context/AuthContext'
import { LogOut } from 'lucide-react'


const Navbar = () => {
    const { user, SignOut } = useAuth();




    return (
        <nav className='bg-white shadow-lg'>
            <div className='max-w-7xl mx-auto px-4'>
                <div className='flex justify-between h-16 '>
                    <div className="flex-shrink-0 flex items-center">
                        <h1 className='text-xl font-bold '>Real time Chat </h1>
                    </div>

                    {user && (
                        <div className='flex items-center'>
                            <span className='mr-4'>{user.email}
                                <button onClick={SignOut} className='inline-flex items-center px-3 py-2 border border-transparent text-sm'>
                                    <LogOut className='h-4 w-4 mr-2' />
                                </button>
                            </span>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    )
}

export default Navbar