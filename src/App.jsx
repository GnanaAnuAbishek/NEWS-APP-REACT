import { useState } from 'react'
import React from 'react'
import { Navbar } from './Component/Navbar.jsx'
import { NewsBoard } from './Component/NewsBoard'

export const App = () => {
  const[category,setCategory] = useState('general')
  return (
    <>
    <Navbar setCategory={setCategory} />
    <NewsBoard category={category} />
    </>
  )
}
