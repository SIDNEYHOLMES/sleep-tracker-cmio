'use client'
import { signIn, signOut, useSession } from 'next-auth/react'

const Signin = () => {
  const { data: session } = useSession();
  console.log(session)
  if (session && session.user){ 
    return (
      <div>
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