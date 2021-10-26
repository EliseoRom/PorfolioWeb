import React from 'react'
import Icon from '@mdi/react'
import {mdiPuzzleEdit,mdiLaptop,mdiShieldAccount,mdiBriefcase} from '@mdi/js'
import './Web.css'
import "../../DarkMode/DarkMode";
import DarkMode from '../../DarkMode/DarkMode';

const Web = () => {
    return (
        <div className='web'>
            
            
            
            <div className='web-option'>
            <a href='#contact'>
                <Icon className='option-icon' path={mdiShieldAccount} size={1.5} color="black"/>
                Contact
            </a> 
            </div>
            <div className='web-option'>
            <a href='#projects'>
                <Icon className='option-icon' path={mdiPuzzleEdit} size={1.5} color="black"/>
                Projects
            </a>
            </div>
            <div className='web-option'>
            <a href='#tecnologies'>
                <Icon className='option-icon' path={mdiLaptop} size={1.5} color="black"/>
                Technologies
            </a>            
            </div>
            <div className='web-option'>
            <a href='#experience'>
                <Icon className='option-icon' path={mdiBriefcase} size={1.5} color="black"/>
                Work experience
            </a> 
            </div>
            <div  className='web-option'path={mdiBriefcase} size={1.5}>
            <DarkMode className="darckicon"/>
                Dark Mode
            </div>
        </div>
    )
}

export default Web