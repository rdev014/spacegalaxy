import React from 'react'

export default function Footerblog() {
    return (
        <div align='center' >
            <object className="embed-responsive-item">
            <video controls autoPlay loop muted className='video' >
                <source src="asteroids-9135.mp4" type="video/mp4" />
                </video>
                <p className="para6" style={{color:'white'}}>Video by Genty from Pixabay </p>
            </object>
        </div>
    )
}
