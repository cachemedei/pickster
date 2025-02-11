'use client'
import Link from 'next/link';
import toast, { Toaster } from 'react-hot-toast';

export default function LoginForm() {
  const handleLogin = () => {
    toast('Sorry! This page is still under construction')
  }
    return (
        <main className='min-h-screen bg-form bg-cover font-main font-extralight text-lg flex items-center justify-center md:font-light'>
            <Toaster />
            <section className='w-[450px] h-[450px] rounded flex flex-col items-center justify-around bg-background/95'>
                <form className='w-4/5 space-y-8 flex flex-col items-center'>
                    <div className='w-72'>
                        <label htmlFor='username'>Username</label>
                        <input
                            className='mt-2 text-background font-light px-2 py-1 rounded bg-white/90 w-72 mx-auto'
                            id='username'
                            type='text'
                        />
                    </div>
                    <div className='w-72'>
                        <label htmlFor='password'>Password</label>
                        <input
                            className='mt-2 text-background font-light px-2 py-1 rounded bg-white/90 w-72 mx-auto'
                            id='password'
                            type='password'
                        />
                    </div>

                    <button type='button' onClick={handleLogin} className='border border-accent w-fit rounded px-2 py-1.5'>
                        Log In
                    </button>
                </form>
                <Link href={'/signup'}>
                    Don't have an account?{' '}
                    <span className='font-medium'>Sign up</span>
                </Link>
            </section>
        </main>
    );
}
