import React from 'react'
import axios from 'axios'

const Home = () => {

  
  const testRequest = () => {
    axios.get('/api/test') // -> Proxied to Express server
      .then(res => {
        console.log(res.data)
      })
      .catch(err => console.error(err))
  }

  return (
    <div>
      <div>HOME PAGE</div>
      <button onClick={testRequest}>'BUTOON'</button>
    </div>
  )
}

export default Home