import React from 'react'
import SocialContact from '../../Common/SocialContact/SocialContact'
import './About.css'

const About = () => {
    return (
        <div className='about'>
            <div className="about-top">
                <div className="about-info">
                <p>Hello, Welcome to my portfolio a pleasure that you are here<br/>
                <span className='info-name'>I am Eliseo Joaquin Romero </span>
                <br /> I am a Full Stack Developer and digital photographer</p>
                </div>
                <div className="about-img">
                    <img src={require('../../Utils/Img/Code.gif').default} alt='foto-codigo' className='picture'/>
                </div>
            </div>
            <div className="about-contact">
                <SocialContact />
            </div>
        </div>
    )
}

export default About
