import CustomTable from '@/app/_components/customTable'
import { GetMySchedule } from '@/app/_lib/api'
import React from 'react'

const Schedule = async() => {
  const data=await GetMySchedule()
  console.log(data)
  return (
    <div>
      <CustomTable/>
    </div>
  )
}

export default Schedule