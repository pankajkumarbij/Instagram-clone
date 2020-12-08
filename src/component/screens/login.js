import React from 'react'
import {useState} from 'react'
import  {useHistory,Link} from 'react-router-dom'
import M from 'materialize-css';
const Login =()=>{
    //const {state,dispatch} = useContext(UserContext)
    const history = useHistory()
    const [password,setPasword] = useState("")
    const [email,setEmail] = useState("")
    const PostData = ()=>{
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)){
        fetch("/sigin",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                password,
                email
            })
        }).then(res=>res.json())
        .then(data=>{
            console.log(data)
           if(data.error){
              M.toast({html: data.error,classes:"#c62828 red darken-3"})
           }
           else{
            M.toast({html:"signed success",classes:"#4caf50 green"})
            history.push('/')
           }
        }).catch(err=>{
            console.log(err)
        })
    }
    else
    {
        M.toast({html: "Invalid email address" ,classes:"#e53935 red darken-1"});
    }
}
   return (
      <div className="mycard">
          <div className="card auth-card input-field">
            <h2>Instagram</h2>
            <input  type="text" placeholder="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
            <input type="password"  placeholder="password" value={password} onChange={(e)=>setPasword(e.target.value)} />
            <button className="btn waves-effect waves-light #64b5f6 blue darken-1" onClick={()=>PostData()}>
                Login
            </button>
            <h5>
                <Link to="/signup">Dont have an account ?</Link>
            </h5>
            <h6>
                <Link to="/reset">Forgot password ?</Link>
            </h6>
    
        </div>
      </div>
   )
}
export default Login;