import React from 'react'
import ModalWindow from './ModalWindow'
import './Experience.css'

const ExperienceCard = ({data}) => {
    return (
        <div className='work-card'>
            <img src={data.logo} alt='' className='work-logo'/>
            <div className="work-info">
                <label className='company-name'>{data.company}</label>
                <div className="work-dates">
                    <label>{data.dateJoining} -</label><label>{data.dateEnd}</label>
                </div>
                <div className="work-desc">
                    <div>
                        <p>{data.work}</p>
                        <ModalWindow />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExperienceCard
