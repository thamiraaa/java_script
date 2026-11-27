import { StudentContext } from '@/StudentContext'
import React from 'react'
import { useContext } from 'react'

const Greeting = () => {
    let Studentname=useContext(StudentContext)
  return (
    <div>
        <h1>Greeting {Studentname}</h1>
    </div>
  )
}

export default Greeting