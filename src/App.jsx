import React from 'react'
import Navabar from './component/Navabar'
import Footer from './component/Footer'
import Content from './component/Content'

const App = () => {
  return (
    <>
    <div className="">
    <Navabar className="h-1/6"/>
    <div className="h-4/6">
    <Content/>
    </div>
    <Footer className="h-1/6"/>
    </div>
    </>
  )
}

export default App
