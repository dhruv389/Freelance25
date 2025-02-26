import axios from 'axios'
import React from 'react'

const Testing = () => {
    const text = axios.get('http://localhost:8080/')
    .then(res=>{
        console.log(res.data)
    })
  return (
    <div>
      <p className='h-screen w-full text-teal-400 text-3xl'>Chatbot</p>
    </div>
  )
}

export default Testing
