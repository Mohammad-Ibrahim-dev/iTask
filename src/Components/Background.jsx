import React, { useState } from 'react'
function Background() {
  const [user, setuser] = useState(()=>{
    const localData = localStorage.getItem('user')
    return localData ? JSON.parse(localData) : prompt('Enter your name');
  })
  localStorage.setItem('user', JSON.stringify(user))
  return (
    <>
    <div className='absolute w-full h-screen bg-zinc-800'>
        <h1 className='text-3xl text-zinc-900 font-semibold pt-5 text-center'>{`hello, ${user}`}</h1>
        <h1 className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] font-semibold text-9xl  text-zinc-900'>iTask</h1>
    </div>
    </>
  )
}

export default Background