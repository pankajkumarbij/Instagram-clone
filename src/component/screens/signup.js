import React from 'react'
import {useState} from 'react'
import  {useHistory,Link} from 'react-router-dom'
import M from 'materialize-css';
const Signup =()=>{
    const history=useHistory()
    const [name,setName] = useState("")
    const [password,setPassword] = useState("")
    const [email,setEmail] = useState("")
    const postData=()=>{
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)){
        fetch("/signup",{
            method:"post",
            headers:{
                "Content-Type":"Application/json"
            },
            body:JSON.stringify({
                name,
                password,
                email
            })
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.error)
            {
                M.toast({html: data.error ,classes:"#e53935 red darken-1"})
            }
            else{
                M.toast({html:data.message,classes:"#4caf50 green"})
                history.push('/login')
            }
        })
    }
    else{
        M.toast({html: "Invalid email address" ,classes:"#e53935 red darken-1"});
    }
}
    return(
        
        <div className="mycard">
        <div className="card auth-card  input-field">
        <h2>Instagram</h2>
        <input   type="text" placeholder="name" value={name} onChange={(e)=>setName(e.target.value)} />
        <input   type="text" placeholder="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
        <input   type="password" placeholder="password"  value={password} onChange={(e)=>setPassword(e.target.value)} />
        <button className="btn waves-effect waves-light #64b5f6 blue darken-2" onClick={()=>postData()} >Submit</button>
        <h5>
            <Link to="/login">If you  have account?</Link>
        </h5>
      </div>
      
      </div>
    )
}
export default Signup;

  