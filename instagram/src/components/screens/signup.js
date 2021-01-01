import {useState} from 'react';
import {Link,useHistory} from 'react-router-dom';
import M from 'materialize-css';

const Signup=()=>{
    const history=useHistory();
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const Postdata=()=>{
        if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)){
            fetch("/signup",{
                method:"post",
                headers:{
                    "Content-Type":"Application/json"
                },
                body:JSON.stringify({
                    name,
                    email,
                    password,
                })
            })
            .then(res=>res.json())
            .then(data=>{
                if(data.error)
                {
                    M.toast({html: data.error,classes:"#c62828 red darken-3"});
                }
                else
                {
                    M.toast({html: data.msg,classes:"#2e7d32 green darken-3"});
                    history.push("/login");
                }
            })
            .catch(err=>{
                console.log(err);
            })
        }
        else{
            M.toast({html:"Invalid email address",classes:"#c62828 red darken-3"});
            return;
        }
    }

    return (
        <div className="mycard">
            <div className="auth-card card input-field">
                <h2 className="heading">Instagram</h2>
                <input type="text" placeholder="full name" value={name} onChange={(e)=>setName(e.target.value)} />
                <input type="email" placeholder="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
                <input type="password" placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
                <button className="btn blue" type="submit" onClick={()=>Postdata()}> Sign-up </button>
                <p>Have an account? <Link to="/login"><b>Login</b></Link></p>
            </div>
        </div>
    );
}

export default Signup;