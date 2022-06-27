import React from 'react'
import './header.css'
function header() {
    return (
        
        <div className='header border flex-container'>
            <div className='flex-items'>
                <ul>
                    <li className='border'><a href="#skills">Skills</a></li>
                    <li className='border'><a href="#certifications">Certifications</a></li>
                    <li className='border'><a href="#projects">Projects</a></li>
                    <li className='border'><a href="#contact">Contact</a></li>
                </ul>
            </div>
            <div className='flex-items logo'>
                {/* <a href="">Coding Budha</a> */}
            </div>
        </div>
        
    )
}

export default header