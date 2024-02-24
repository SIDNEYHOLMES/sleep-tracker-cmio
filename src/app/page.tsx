'use client'
import { useSession } from "next-auth/react";

export default function Home() {
  const {data: session} = useSession();

  if (session && session.user) {// if user is logged in
    return(
      <div>
        <p>How was your rest, add your sleep detailes below</p>
        <a href='newday'>NEW SLEEP DAY</a>
      </div>
    )
  }
  return (
  <div>
    <h1>WELCOME</h1>
  </div>
  )
}
