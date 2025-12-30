import React from 'react'

const page =async () => {
    await new Promise((m)=>{
        setTimeout(() => {
            m()
        }, 10000);

    })
  return (
    <div>page</div>
  )
}

export default page