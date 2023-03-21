import React from 'react'

export default function Navbar() {
  return (
    <>
<nav className="navbar navbar-expand-lg bgimg " style={{backgroundImage:'url(https://i.pinimg.com/originals/cf/6f/90/cf6f902d96f5976d4e29c4a5c3fa6c7e.gif)'}}>
    <div className="container-fluid">
      <a className="navbar-brand" href="/"><img src="rocketship-unscreen.gif" style={{borderRadius:"60%"}}  alt="" width={"250px"} className="img-fluid img"/><br/>
      </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"
        style={{color: "aliceblue",background:"aliceblue;"}}>
        <span className="navbar-toggler-icon" style={{backgroundColor:'white'}}>

        </span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav" style={{gap:"50px"}}>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/" style={{color:'lightgray',fontWeight:'bolder', fontSize:"22px",fontFamily:"curcive"}}>HOME</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#foot" style={{color:"aliceblue",fontSize:"22px",fontFamily:"curcive",fontWeight:'bolder',color:'lightgray'}}>ABOUT</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#foot" style={{color:"white",fontSize:"24px",fontFamily:"curcive",fontWeight:'bolder',color:'lightgray'}}>CONTACT</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/Blogs" style={{color:"aliceblue",fontSize:"22px",fontFamily:"curcive",fontWeight:'bolder',color:'lightgray'}}>BLOGS</a>
          </li>
        </ul>
      </div>
    </div>
    
  </nav>
  
  </>
  );
}
