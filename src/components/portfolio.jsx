import React from 'react'
import './portfolio.css'
import Header from './Header/header'
import About from './About/About'
import Skills from './Skills/skillbartemplate'
import Certificatons from './Certifications/certificatons'
import Projects from './Projects/projects'
import Footer from './Footer/footer'
function portfolio() {
  return (
    <>
        <div className="container border">
        <Header/>
        <About/>
        <Skills/>
        <Certificatons/>    
        <Projects/>
        <Footer/>
        </div>
    </>

  )
}

export default portfolio