'use client'
import { useSession } from "next-auth/react";
import { useEffect } from "react";

export default function Home() {
  const {data: session} = useSession(); // session 

  const requestMonthData = async () => {
    // should take the current month frome date time to 
    const res = await fetch('/api/db/month')
    return res.json()
  }
  
  if (session) {// if a session is active by a user being logged in render below
    requestMonthData()
    return(
      <div>
        <p>How was your rest, add your sleep detailes below</p>
        <a href='newday'>NEW SLEEP DAY</a>
      </div>
    )
  }
  // otherwise no one is logged in default render below
  return (
  <div>
    <h1>WELCOME</h1>
  </div>
  )
}
