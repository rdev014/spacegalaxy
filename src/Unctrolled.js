import React, { useState } from 'react'

export default function Unctrolled(){
const[data,setdata]=useState(" ") 
  return (
    <div>
      <h1 style={{color:'aliceblue'}}>{data}</h1>
      <input type="text"  onChange={(t)=>setdata(t.target.value)} />
    </div>
  )
}
