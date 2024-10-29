
import List from './components/list/List'
import Chat from './components/chat/Chat'
import Detail from './components/detail/Detail'

import './App.css'

function App() {

  return (
    <div className='h-[90vh] w-[90vw] px-4 py-8 bg-blue-600 backdrop-blur-lg backdrop-saturate-150 bg-opacity-70 rounded-xl flex'>
      <List/>
      <Chat/>
      <Detail/>
    </div>
  )
}

export default App
