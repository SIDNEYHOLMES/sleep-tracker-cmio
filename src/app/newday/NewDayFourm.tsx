'use client'
import { DateTime } from 'next-auth/providers/kakao';
import React from 'react'
import { useState } from 'react'

export interface FormData {
    date: Date,
    sleepRating: number,
    sleepHours: number,
    wakeUpTime: string,
    timeOfSleep: string,
    interupted: boolean,
    interuptedArr: Array<DateTime>
}

const NewDayFourm = () => {
  /*
    should input user fourm data to create a new database day in the table

    inputs:
      overall rating: int
      hours of sleep: int,
      wake up time: time,
      time of sleep: 
      if interupted sleep: bool
      when interupted sleep: [time, time]
  */
 const currentDate = new Date()
 let [formData, setFormData] = useState<FormData>({
  date: currentDate,
  sleepRating: 1,
  sleepHours: 1,
  wakeUpTime: '',
  timeOfSleep: '',
  interupted: false,
  interuptedArr: []
 })

  const submitDay = async (event: React.FormEvent) => {
      event.preventDefault() // prevent page refresh on submit

        const res = await fetch('api/db/day/create', { // send form data to create new day 
          method: 'POST',
          body: JSON.stringify(formData),
          headers: {'Content-Type': 'application/json'}
        })
        const body = await res.json()
        console.log(body)
  }
  
  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const date = new Date(e.target.value)
    setFormData({...formData, date,})
  }

  const handleRatingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({...formData, sleepRating: Number(e.target.value)})
  }


  const handleHourChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({...formData, sleepHours: Number(e.target.value)})
  }

  const handleWakeTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({...formData, wakeUpTime: e.target.value})
  }

  const handleSleepTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({...formData, timeOfSleep: e.target.value})
  }

  const handleInteruptedBoolChange = () => {
    setFormData({...formData, interupted: !formData.interupted})
  }
  
  return (
    <div>
      <h1>Welcome to the Fourm</h1>
      <form onSubmit={submitDay} className='flex flex-col w-2/6 space-y-5'>
        <label>Date
          <input onChange={handleDateChange} type='date' name='date' required ></input>
        </label>
        <label>Rating
          <input onChange={handleRatingChange} type='number' min='1' max='100' name='sleepRating' required></input>
        </label>
        <label> Sleep Hours
          <input onChange={handleHourChange} type='number' min='1' max='24' name='sleepHours' required></input>
        </label>
        <label> Wake Up Time
          <input onChange={handleWakeTimeChange} type='time' name='wakeUpTime' required></input>
        </label>
        <label>Time Of Sleep
          <input onChange={handleSleepTimeChange} type='time' name='timeOfSleep' required></input>
        </label>
        <label>Interupted Sleep?
          <input onChange={handleInteruptedBoolChange} type="checkbox" name='interupted'/>
        </label>
        <button type='submit'>Submit</button>
      </form> 
    </div>
  )
}

export default NewDayFourm