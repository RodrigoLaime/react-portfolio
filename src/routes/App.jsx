import { HashRouter, Route, Routes } from 'react-router-dom'
import React from 'react'
import './App.css'
import { Menu } from './menu/Menu'
import { Home } from './home/Home'
import { About } from './about/About'
import { Jobs } from './jobs/Jobs'
import { Contact } from './contact/Contact'


function App() {
  return (
    <HashRouter className="App">
      <Menu />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/jobs' element={<Jobs />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<p>Not Found</p>} />
      </Routes>
    </HashRouter>
  )
}

export default App