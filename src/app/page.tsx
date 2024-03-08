'use client'
import { useSession } from "next-auth/react";
import CurrentMonth from "./components/month/CurrentMonth";

export default function Home() {
  const {data: session} = useSession(); // session 
  
  if (session) {// if a session is active by a user being logged in render below
    return(
      <div>
        <p>How was your rest, add your sleep detailes below</p>
        <a href='newday'>NEW SLEEP DAY</a>
        <h1>Your Current Month</h1>
        <CurrentMonth/>
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
