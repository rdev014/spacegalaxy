import React from 'react'

export default function Footer() {
    return (
        <>
            <hr className="mb-4" />
            <div className="row align-items-center">
                <div className="col-md-7 col-lg-8">
                    <p>

                    </p>
                </div>
            </div>
            <div className="text-white mt-4 "
                style={{ padding: '12px', margintop: "20vh", background: "linear-gradient(to right,blue,black,black,blue )", boxSizing: "border-box" }}>

                <div className="container1 text-center  text-md-left" >

                    <div className="col-md-3 col-lg-3 col-xl-3 mx-auto ">
                        <h5 className="text-uppercase mb-4 font-weight-bold text-warning"> WElcome</h5>
                        <p>
                            Welcome to the world of <br />
                            Galaxies <br />
                            Explore whatever You want to know about <b>stars,planets,astroids,combets</b> and many more things
                        </p>
                    </div>

                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto  " id="foot">
                        <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Products</h5>
                        <p>
                            <a href="/" className="text-white" >Blogs</a><br />

                            <a href="/" className="text-white" >Refrences</a><br />

                            <a href="/" className="text-white" >Videos</a><br />
                        </p>
                    </div>

                    <div className="col-md-3  mx-auto ">
                        <h5 className="text-uppercase mb-4 font-weight-bold text-warning"> Usefull Links</h5>
                        <p>
                            <a href="/" className="text-white" >Explore more</a><br />

                            <a href="/" className="text-white">Contact</a><br />

                            <a href="/" className="text-white" >Feedback</a><br />
                        </p>
                    </div>

                    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto ">
                        <h5 className="text-uppercase mb-4 font-weight-bold text-warning"> Contact</h5>
                        <p>
                            <i className="fas fa-home mr-4 "></i> New York, NY 2333, US
                        </p>
                        <p>
                            <i className="fas fa-envelope mr-4 "></i> abc1344@gmail.com
                        </p>
                        <p>
                            <i className="fas fa-phone mr-4 "></i> +91 987312334
                        </p>
                        <p>
                            <i className="fas fa-print mr-4 "></i> +91246231125
                        </p>
                    </div>
                </div><br />
                 </div>


        </>



    )

}
