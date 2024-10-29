import React from 'react'

import moreIcon from '/more.png'
import videoIcon from '/video.png'
import editIcon from '/edit.png'
import avatarIcon from '/avatar.png'

const UserInfo = () => {
  return (
    <div className='p-5 flex items-center justify-between '>
        <div className='flex items-center gap-5'>
            <img src={avatarIcon} alt="" className='w-12 h-12 rounded-full object-cover'/>
            <h2>Zhanserik</h2>
        </div>
        <div className='flex gap-x-5'>
            <img src={moreIcon} alt="" className='w-5 h-5 cursor-pointer'/>
            <img src={videoIcon} alt="" className='w-5 h-5 cursor-pointer'/>
            <img src={editIcon} alt="" className='w-5 h-5 cursor-pointer'/>
        </div>
    </div>
  )
}

export default UserInfo