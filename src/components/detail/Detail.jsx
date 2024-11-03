import React from 'react'

export default function Detail() {
  return (
    <div className='flex-1'>
      <div className="user py-7 px-5 flex flex-col items-center gap-5 border-b-2 border-[#dddddd35]">
        <img src="/avatar.png" alt="" className='w-24 h-24 object-cover rounded-full'/>
        <h2>Artay Marat</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque consequatur velit architecto rerum voluptatibus esse placeat dolore. Earum repellendus magni voluptates beatae, fugiat, expedita corrupti, possimus iusto id libero ut!q</p>
      </div>
      <div className="info p-5 flex flex-col gap-8">
        <div className="option">
          <div className="title flex items-center justify-between">
            <span>Chat settings</span>
            <img src="/arrowUp.png" alt="" className='w-7 h-7 bg-blue-950 bg-opacity-30 p-2 rounded-full cursor-pointer'/>
          </div>
        </div>
        <div className="option">
          <div className="title flex items-center justify-between">
            <span>Chat settings</span>
            <img src="/arrowUp.png" alt="" className='w-7 h-7 bg-blue-950 bg-opacity-30 p-2 rounded-full cursor-pointer'/>
          </div>
        </div>
        <div className="option">
          <div className="title flex items-center justify-between">
            <span>Privacy & help</span>
            <img src="/arrowUp.png" alt="" className='w-7 h-7 bg-blue-950 bg-opacity-30 p-2 rounded-full cursor-pointer'/>
          </div>
        </div>
        <div className="option">
          <div className="title flex items-center justify-between">
            <span>Share photos</span>
            <img src="/arrowDown.png" alt="" className='w-7 h-7 bg-blue-950 bg-opacity-30 p-2 rounded-full cursor-pointer'/>
          </div>
          <div className='photos mt-5 flex flex-col gap-5'>
            <div className="photoItem flex items-center justify-between">
              <div className="photoDetail flex items-center gap-5">
                <img src="https://placehold.co/600x400" alt="" className='w-10 h-10 rounded-md'/>
                <span className='text-sm text-gray-300 font-light'>Placeholder</span>
              </div>
              <img src="/download.png" alt="" className='icon w-7 h-7 bg-blue-950 bg-opacity-30 p-2 rounded-full cursor-pointer'/>
            </div>
          </div>
        </div>
        <button className='p-3 py-3 bg-red-500 hover:bg-red-700 transition-colors bg-opacity-50 text-white border-none rounded-md'>Block User</button>
      </div>
    </div>
  )
}
