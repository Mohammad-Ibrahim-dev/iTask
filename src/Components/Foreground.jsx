import React, { useEffect, useMemo, useState } from 'react'
import Card from './Card.jsx'

function Foreground() {
  const [task, settask] = useState('')
  const [todos, settodos] = useState(() => {
  const localData =localStorage.getItem("todos")
  return localData ? JSON.parse(localData) : []
  })
  const now = new Date()

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])
  
  const handleSave = () => {
    if (task.trim() != '') {
      settodos([...todos, { task: task, date: now.toLocaleDateString(), time: now.toLocaleTimeString() }])
      settask('')
    }
  }

  const handleDelete = async(e, time) => {
    let newtodos = todos.filter(item => {
      return item.time != time
    })
    settodos(newtodos)
    console.log(todos)
  }

  return (
    <div className='absolute w-full h-screen'>
      <div className='w-full h-[85%] p-5 flex flex-wrap gap-5 overflow-auto'>
        {
          todos.map(todo => {
            return <Card key={todo.time} props={todo} onClick={handleDelete} />
          })
        }
      </div>
      <div className='w-full h-[15%] flex flex-col gap-2 justify-center items-center p-2'>
        <textarea className="p-2 w-full sm:w-1/2 rounded-xl text-white h-16 bg-zinc-900 " type="text" value={task} onChange={e => { settask(e.target.value) }} placeholder='keep in ....' />
        <button className=' bg-yellow-600 rounded-xl w-full sm:w-1/2 font-semibold text-white' onClick={handleSave}>Save</button>
      </div>
    </div>
  )
}

export default Foreground
