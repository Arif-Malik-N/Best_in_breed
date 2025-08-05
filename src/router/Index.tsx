import React from 'react'
import { Route, Routes } from 'react-router'
import { Clients, Home } from '../pages'

const Routing = React.memo(() => {
  return (
    <div className='mx-3 text-lightBlackText font-jakarta'>
      <Routes>
        <Route path="/" element={<Home />} />  
        <Route path="/clients" element={<Clients />} />  
      </Routes>
    </div>
  )
})

export default Routing
