
// icons

import avatarIcon from '/avatar.png'
import phoneIcon from '/phone.png'
import videoIcon from '/video.png'
import infoIcon from '/info.png'
import emojiIcon from '/emoji.png'

// icons

// hooks
import { useEffect, useRef, useState } from 'react'

// hooks


import EmojiPicker from 'emoji-picker-react'
 
const Chat = () => {

  const endRef = useRef(null)

  useEffect(()=>{
    endRef.current?.scrollIntoView({Behavior: "smooth"})
  })

  const [open, setOpen] = useState(false)
  const [text, setText] = useState('')

  const handleEmoji = (e) =>{
    setText((prev) => prev + e.emoji)
  }
 
  return (
    <div className='chat flex flex-col flex-2 border-l border-r border-[#dddddd35] h-full'>
      <div className='top p-5 flex items-center justify-between border-b border-[#dddddd35]'>
        <div className="user flex items-center gap-5">
          <img src={avatarIcon} alt="" 
            className='w-14 h-14 rounded-full object-cover'
          />
          <div className="texts flex flex-col gap-1">
            <span className='font-bold text-lg'>Artay Marat</span>
            <p className='text-sm font-light text-[#a5a5a5]'>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        <div className="icons flex gap-5">
          <img src={phoneIcon} alt="" className='w-5 h-5'/>
          <img src={videoIcon} alt="" className='w-5 h-5'/>
          <img src={infoIcon} alt="" className='w-5 h-5'/>
        </div>
      </div>
      <div className='center overflow-auto flex flex-col gap-5 flex-1 p-5'>
        <div className="message max-w-[70%] flex gap-5 ">
          <img src="/avatar.png" alt="" className='w-8 h-8 rounded-full object-cover'/>
          <div className="texts flex-1 flex flex-col gap-1">
            <p className='p-5 bg-blue-950 bg-opacity-30 rounded-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat eos eligendi officia illum possimus et fugiat molestiae, vel enim dolores nemo eveniet accusamus minus qui laborum maxime ad? Ut, iusto.</p>
            <span className='text-sm'>1 minute ago</span>
          </div>
        </div>
        <div className="message max-w-[70%] flex gap-5 ">
          <img src="/avatar.png" alt="" className='w-8 h-8 rounded-full object-cover'/>
          <div className="texts flex-1 flex flex-col gap-1">
            <img src='https://placehold.co/600x400' className='w-full h-80 rounded-xl object-cover'/>
            <p className='p-5 bg-blue-950 bg-opacity-30 rounded-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat eos eligendi officia illum possimus et fugiat molestiae, vel enim dolores nemo eveniet accusamus minus qui laborum maxime ad? Ut, iusto.</p>
            <span className='text-sm'>1 minute ago</span>
          </div>
        </div>
        <div className="message own self-end max-w-[70%]">
          <div className="texts">
            <p className='bg-[#5183fe] p-5 rounded-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat eos eligendi officia illum possimus et fugiat molestiae, vel enim dolores nemo eveniet accusamus minus qui laborum maxime ad? Ut, iusto.</p>
            <span>1 minute ago</span>
          </div>
        </div>
        <div ref={endRef}></div>
      </div>
      <div className='bottom p-5 flex items-center justify-between gap-x-5 border-t border-[#dddddd35]'>
        <div className="icons flex gap-5 ">
          <img src="/img.png" alt="" className='w-5 h-5 cursor-pointer'/>
          <img src="/camera.png" alt="" className='w-5 h-5 cursor-pointer'/>
          <img src="/mic.png" alt="" className='w-5 h-5 cursor-pointer'/>
        </div>
        <input type="text" 
          className='flex-1 text-lg px-2 py-2 rounded-xl bg-[rgba(17,25,40)] bg-opacity-50 border-none outline-none text-white' placeholder='Ваше сообщение...'
          value={text}
          onChange={e=>setText(e.target.value)}
        />
        <div className="emoji relative">
          <img src={emojiIcon} 
            alt="" 
            className='w-5 h-5 cursor-pointer' 
            onClick={()=>setOpen((prev)=>!prev)}
          />
          <div className="picker absolute bottom-12 left-0">
            <EmojiPicker 
              open={open}
              onEmojiClick={handleEmoji}
            />
          </div>
        </div>
        <button className='send-button bg-[#2a52b6] text-white px-3 py-2 border-none rounded-md cursor-pointer'>Отправить</button>
      </div>
    </div>
  )
}

export default Chat