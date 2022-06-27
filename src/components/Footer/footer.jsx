import React from 'react'
import './footer.css'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import {FaRegHeart} from 'react-icons/fa'
function footer () {
  return (
    <>
    <div className="containerr">
    <footer class="footer" id='contact'>
    <div class="waves">
      <div class="wave" id="wave1"></div>
      <div class="wave" id="wave2"></div>
      <div class="wave" id="wave3"></div>
      <div class="wave" id="wave4"></div>
    </div>
    <ul class="social-icon">
      <li class="social-icon__item"><a class="social-icon__link" href="https://www.linkedin.com/in/binilbiju">
      <AiFillLinkedin/>
        </a></li>
      <li class="social-icon__item"><a class="social-icon__link" href="https://github.com/aaromalchekavar">
      <AiFillGithub/>
        </a></li>
      <li class="social-icon__item"><a class="social-icon__link" href="https://www.instagram.com/_aaromalchekavar/">
          <AiFillInstagram/>
        </a></li>
    </ul>
    <p>Made with <FaRegHeart/> by Binil</p>
  </footer>
    </div>
    
    </>
  )
}

export default footer