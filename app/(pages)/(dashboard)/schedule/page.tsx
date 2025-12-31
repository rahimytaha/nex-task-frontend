import { GetMySchedule } from '@/app/_lib/api'
import React from 'react'

const Schedule = async() => {
  const data=await GetMySchedule()
  console.log(data)
  return (
    <div>Schedule</div>
  )
}

export default Schedule