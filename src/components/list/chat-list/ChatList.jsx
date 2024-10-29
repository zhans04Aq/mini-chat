import {useState} from 'react'

import searchIcon from '/search.png'
import plusIcon from '/plus.png'
import minusIcon from '/minus.png'
import avatarIcon from '/avatar.png'

const ChatList = () => {

    const [addMode, setAddMode] = useState(false)

    const handleAddMode = () => {
        setAddMode((prevAddMode)=>!prevAddMode)
    }

  return (
    <div className='chatList flex-1 overflow-auto'>
        <div className='search flex items-center gap-5 p-5 '>
            <div className='searchBar flex flex-1 flex-row items-center gap-5 px-4 py-2 rounded-xl bg-[rgba(17,25,40)] bg-opacity-50'>
                <img src={searchIcon} alt="" className='w-5 h-5'/>
                <input type="text" placeholder='Поиск' className='bg-transparent border-none outline-none text-white flex-1'/>
            </div>
            <img onClick={handleAddMode} src={addMode ? minusIcon :plusIcon } alt="" className='w-9 h-9 bg-[rgba(17,25,40)] bg-opacity-50 p-2 rounded-xl cursor-pointer'/>
        </div>
        <div className='item flex center gap-5 p-5 cursor-pointer border-b border-[#dddddd35]'>
            <img src={avatarIcon} alt="" />
            <div className='texts'>
                <span>Rasulkhan</span>
                <p>Hello</p>
            </div>
        </div>
        <div className='item flex center gap-5 p-5 cursor-pointer border-b border-[#dddddd35]'>
            <img src={avatarIcon} alt="" />
            <div className='texts'>
                <span>Rasulkhan</span>
                <p>Hello</p>
            </div>
        </div>
        <div className='item flex center gap-5 p-5 cursor-pointer border-b border-[#dddddd35]'>
            <img src={avatarIcon} alt="" />
            <div className='texts'>
                <span>Rasulkhan</span>
                <p>Hello</p>
            </div>
        </div>
    </div>
  )
}

export default ChatList