import { DateTime } from 'next-auth/providers/kakao';
import React from 'react'
import { useState } from 'react'


const NewDayFourm = () => {
  const [formQuery, setFormQuery] = useState({
    rating: 0,
    sleepHours: 0,
    
  });
  /*
    should input user fourm data to create a new database day in the table

    inputs:
      overall rating: int
      hours of sleep: int,
      wake up time: time,
      time of sleep: 
      if interupted sleep: bool
      when interupted sleep: [time, time]

    Create inputs: (everything before is already included)
    userid,
    sleepWeekId (create sleep week if it start of the week (sunday))

  */

  const submitDay = (
    {
      date,
      sleepRating,
      sleepHours,
      wakeUpTime,
      timeOfSleep,  
      interupted,
      interuptedArr
    }: {
      date: Date,
      sleepRating: number,
      sleepHours: number,
      wakeUpTime: DateTime,
      timeOfSleep: DateTime,
      interupted: boolean,
      interuptedArr: Array<DateTime>
    }) => {
    
  }
  
  return (
    <div>
      <form>
        
      </form> 
    </div>
  )
}

export default NewDayFourm