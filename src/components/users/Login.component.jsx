import React ,{useState}from "react";

import {Link} from 'react-router-dom';
import { Title } from "../pages/Header.component";
// import { useState } from 'react';
export const Login=()=>{
const [name,setName]=useState();
const [email,setEmail]=useState();
const [phone,setPhone]=useState();
const handaleSubmit=(e)=>{
    e.preventDefault();
    setEmail('');
    setName('');
    setPhone('');
};
    return(
<div>
<h2>אנחנו פה בשביל החלומות שלכם...</h2>
<form onSubmit={handaleSubmit}>

<label>name<input type="text"  value={name} onChange={(e)=>setName(e.target.value)} required/></label>
<label>email<input type="email"  value={email} onChange={(e)=>setEmail(e.target.value)} required/></label>
<label>phone<input type="text"  value={phone} onChange={(e)=>setPhone(e.target.value)} required/></label>
<br></br>
<br></br>
<button type="submit">לאישור ושליחה</button>


    
</form>
</div>
    )
    

}