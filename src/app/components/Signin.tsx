'use client'
import { signIn, signOut, useSession } from 'next-auth/react'

const Signin = () => {
  const { data: session } = useSession();
  
  // sessions only exsist when loged in so if a session and a user exsists render signout button and username
  if (session && session.user){ 
    return (
      <div className='flex flex-row space-x-5'>
        <p>{session.user.name}</p>
        <button onClick={() => signOut()}>Sign Out</button>
      </div>
    )
  }
  
  return (
    <button onClick={() => signIn('google')}>Signin</button>
  )
}

export default Signin