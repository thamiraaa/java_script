import React from 'react'
import Count from '@/hooks/Count'
import Parent from '@/components/ui/Parent'
import { StudentContext } from '@/StudentContext'
const About = () => {
  let Studentname="Student"
  return (
    <div>
      <StudentContext.Provider value={Studentname}>
        <Parent/>
      </StudentContext.Provider>
        <Count/>
    </div>
  )
}

export default About