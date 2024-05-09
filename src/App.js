import React from 'react'
import './App.css';
import { Navbar } from './component/Navbar';
import { Page1 } from './component/Page1';
import { Page2 } from './component/Page2';
export const App = () => {
  return (
    <>
    <div >
    <Navbar/>
    <Page1/>
    <Page2/>
    </div>
    </>
  )
}

