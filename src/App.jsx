import React from 'react'
import SideNav from './components/SideNav'
import Body from './components/Body'

const App = () => {
  return (
    <div className='w-full flex'>
      <div className='w-2/12'>
        <SideNav/>
      </div>
      
      <div className='w-10/12'>
        <Body/>
      </div>
    </div>
  )
}

export default App
