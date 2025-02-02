import React from 'react'

function Card({props,onClick}) {
  return (
    <>
    <div className='bg-slate-50 rounded-2xl w-[46%] h-1/3 sm:w-48 sm:h-60'> 
          <div className='font-semibold text-center'>iTask</div>
          <hr />
          <div className='h-[65%] p-2 overflow-y-auto' id='todoArea'>
            <pre>{props.task}</pre>
          </div>
          <hr />
          <div className='flex justify-between items-center h-[10%]'>
            <h3 className='text-xs'>{props.time}</h3>
            <h3 className='text-xs'>{props.date}</h3>
          </div>
          <div className=' flex justify-center  items-center bg-green-400 w-full h-[20%] rounded-b-2xl'>
            <button className='font-semibold text-lg' onClick={(e)=>onClick(e,props.time)}>Delte</button>
          </div>
      </div>
    </>
  )
}

export default Card 