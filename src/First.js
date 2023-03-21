import React from 'react'

export default function First() {
    return (
        <div className="container-fluid" style= {{background:"linear-gradient(to right, black 20%, navy)"}}>
            <h1 className="hd1" style={{color: "yellow",textAlign:"center",marginTop:"0em",textDecoration:"1px underline",fontSize:'64px',fontFamily:'cursive'}}> ..Welcome To Mystery..</h1>
            <br /><br /><br /><br />
            <div className="right">
                <img src="moon.gif" alt="" width={"600px"} className="img-fluid col-lg-5 pic"/>
            </div>
            <div className="head left">
                <h2>let's Explore</h2><br />
                <p>Welcome to the world of mystery <br />
                    let's flow n fell the Superious power of huge planets like <b>Sun,Moon,Earth,Mars</b> Feel the energy of <b>Galaxies,stars and other various planets.. </b>
                </p><br />
                <div className="icon">
                    <a href=" blogs.html">
                        <button><i className="fa-sharp fa-2x fa-solid fa-arrow-right-long"></i></button></a>
                </div>
            </div>
        </div>
        
    );
    
}
