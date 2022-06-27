import React from 'react'
import './about.css'
import Me from '../../assets/img.jpg'
import CV from '../../assets/cv.pdf'
function About() {
    return (
        <div className='border About'>
            <div className='flex'>
                <div className='flexitem border'>
                    <h2>Binil Biju</h2>
                    <p>
                        I am a Final Year CSE student from Cochin University
                        of Science and Technology.</p>
                    <p>
                        I call myself a workaholic tech enthusiast.I started
                        my journey in tech world back in 2018 when i started
                        learning about Linux and ever since then I have kept
                        it close to my heart
                    </p>
                    <p>
                        Literally I can do anything with my googling skills... LOL
                    </p>
                </div>
                <div className='flexitem border'><img src={Me} alt="" srcset="" /></div>
            </div>
            <div className="border">
                <div className="cta">
                    <a href={CV} download className='btn'>Download CV</a>
                    <a href="#contact" className='btn-primary'>Let's Talk</a>
                </div>
            </div>
        </div>
    )
}

export default About