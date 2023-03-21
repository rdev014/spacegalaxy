import React from 'react'

export default function Second() {
    return (
        <div>
            <div>
                <hr className="mb-4" />
                <div className="row align-items-center">
                    <div className="col-md-4 col-lg-4">
                        <p>

                        </p>
                    </div>
                </div>
                <div className="container-xxl mt-4 container-fluid">
                    <h1 className="hd1"
                        style={{ color: "orange", textalign: "center", textdecoration: "1px solid white underline", fontfamily: "sysans-serif" }}>
                        The UnTold Space
                    </h1><br />
                    <div className="container-fluid " style={{marginRight:'0px',marginLeft:'12px'}}>
                        <video controls autoPlay loop muted className='video' >
                            <source src="solar-system.mp4" type="video/mp4" />
                        </video>
                    </div>
                </div>
            </div>
        </div>
    );
}
