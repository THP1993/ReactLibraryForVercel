import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

export default function Highlights() => {
  return (
    <section id="highlights">
    <div className='container'>
    <div className="row">
    <h2 className="title">Why Choose <span className='purple'>Library</span>
    </h2>
    <div className="highlight__wrapper">
    <div className="highlight">
    <div className="highlight__img">
    <FontAwesomeIcon icon="bolt" />  
    </div>
    </div>
    </div>
    </div>
    </div>
    </section>
  )
}

export default Highlights; 