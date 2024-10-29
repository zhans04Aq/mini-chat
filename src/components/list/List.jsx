import React from 'react'
import UserInfo from './user-info/UserInfo'
import ChatList from './chat-list/ChatList'

const List = () => {
  return (
    <div className='flex-1 flex flex-col'>
        <UserInfo/>
        <ChatList/>
    </div>
  )
}

export default List