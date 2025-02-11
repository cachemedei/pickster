'use client'
import Link from 'next/link';
import toast, { Toaster } from 'react-hot-toast';

export default function SignupForm() {
    const handleSignup = () => {
        toast('Sorry! This page is still under construction')
    }
    return (
        <main className='min-h-screen bg-form bg-cover font-main font-extralight text-lg flex items-center justify-center md:font-light'>
            <Toaster />
            <section className='w-[450px] rounded h-[600px] flex flex-col items-center justify-around bg-background/95'>
                <form className='w-4/5 space-y-3 flex flex-col items-center'>
                    <div className='w-72'>
                        <label htmlFor='fname'>First Name</label>
                        <input
                            className='mt-2 text-background font-light px-2 py-1 rounded bg-white/90 w-64 mx-auto'
                            id='fname'
                            type='text'
                        />
                    </div>
                    <div className='w-72'>
                        <label htmlFor='lname'>Last Name</label>
                        <input
                            className='mt-2 text-background font-light px-2 py-1 rounded bg-white/90 w-64 mx-auto'
                            id='lname'
                            type='text'
                        />
                    </div>
                    <div className='w-72'>
                        <label htmlFor='email'>Email</label>
                        <input
                            className='mt-2 text-background font-light px-2 py-1 rounded bg-white/90 w-72 mx-auto'
                            id='email'
                            type='email'
                        />
                    </div>
                    <div className='w-72'>
                        <label htmlFor='username'>Username</label>
                        <input
                            className='mt-2 text-background font-light px-2 py-1 rounded bg-white/90 w-64 mx-auto'
                            id='username'
                            type='text'
                        />
                    </div>
                    <div className='w-72'>
                        <label htmlFor='password'>Password</label>
                        <input
                            className='mt-2 text-background font-light px-2 py-1 rounded bg-white/90 w-64 mx-auto mb-6'
                            id='password'
                            type='password'
                        />
                    </div>

                    <button type='button' onClick={handleSignup} className='border border-accent w-fit rounded px-2 py-1.5'>
                        Create Account
                    </button>
                </form>
                <Link href={'/login'}>
                    Already have an account?{' '}
                    <span className='font-medium'>Log in</span>
                </Link>
            </section>
        </main>
    );
}
