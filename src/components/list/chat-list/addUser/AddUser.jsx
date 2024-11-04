import React from 'react'

export const AddUser = () => {
  return (
    <div className='addUser p-8 bg-blue-950 bg-opacity-70 rounded-lg absolute top-0 bottom-0 right-0 left-0 m-auto max-w-max h-max'>
        <form 
          action=""
          className='flex gap-5'
        >
          <input 
            type="text" 
            placeholder='Username' 
            name="username"
            className='px-4 py-2 rounded-lg border-none outline-none'

          />
            <button className='px-4 py-2 rounded-lg bg-blue-500 text-white border-none'>search</button>
        </form>
        <div className='user mt-12 flex items-center justify-between'>
            <div className="detail flex items-center gap-5">
                <img src="/avatar.png " alt="" className='w-12 h-12 rounded-full object-cover'/>
                <span className="username">Sultan Mecheev</span>
            </div>
            <button className='px-4 py-2 rounded-lg bg-blue-800 text-white border-none'>+</button>
        </div>
    </div>
  )
}
