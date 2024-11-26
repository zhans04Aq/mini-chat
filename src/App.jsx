
import List from './components/list/List'
import Chat from './components/chat/Chat'
import Detail from './components/detail/Detail'
import { Notification } from './components/notifications/Notification'

import './App.css'
import { LogIn } from './components/login/LogIn'

function App() {

  const user = false

  return (
    <div className='h-[90vh] w-[90vw] px-4 py-8 bg-blue-900 backdrop-blur-lg backdrop-saturate-200 bg-opacity-70 rounded-xl flex'>
      {
        user ? (
          <>
            <List/>
            <Chat/>
            <Detail/>
          </>
        ) : (
          <LogIn/>
        )
      }
    <Notification/>
    </div>
  )
}

export default App
