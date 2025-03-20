import React from 'react'

import Header from './compos/Header'
import About from './compos/About'
import Projects from './compos/Projects'
import Testimonial from './compos/Testimonial'
import Contact from './compos/Contact'
import { ToastContainer } from 'react-toastify';
import Foter from './compos/Foter'


const App = () => {
  return (
    <div>
      <ToastContainer></ToastContainer>
      <Header></Header>
      <About></About>
      <Projects></Projects>
      <Testimonial></Testimonial>
      <Contact></Contact>
      <Foter></Foter>
    </div>
  )
}

export default App