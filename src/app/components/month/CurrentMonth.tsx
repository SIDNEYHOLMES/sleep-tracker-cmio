import {useEffect, useState} from 'react'

const CurrentMonth = () => {
  let [monthData, setMonthData] = useState<{
    authorId: Number,
    createdAt: String,
    endDate: String,
    id: Number,
    startDate: String,
  }>({
    authorId: 0,
    createdAt: '',
    endDate: '',
    id: 0,
    startDate: ''
  });
  // should retrieve the current months information including day data and accuratly displaying that


  const requestMonthData:() => Promise<void> = async () => {
    // should take the current month frome date time to 
    await fetch('/api/db/month/current')
    .then(res => res.json())
    .then(data => {
      setMonthData(data.sleepMonth)
    })
  }
  // now that we have the month data to create our calander we need the day data to fill it

  
  useEffect(() => {requestMonthData()}, [])
  
  return (
    <div>
    </div>
  )
}

export default CurrentMonth