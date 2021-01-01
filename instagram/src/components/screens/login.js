import {useState,useContext} from 'react';
import {Link,useHistory} from 'react-router-dom';
import {UserContext} from '../../App';
import M from 'materialize-css';

const Login=()=>{
    const {state,dispatch} = useContext(UserContext);
    const history=useHistory();
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const Logindata=()=>{
        if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)){
            fetch("/login",{
                method:"post",
                headers:{
                    "Content-Type":"Application/json",
                },
                body:JSON.stringify({
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
                    localStorage.setItem("jwt",data.token);
                    localStorage.setItem("user",data);
                    dispatch({type:"USER",payload:data});
                    M.toast({html: data.msg,classes:"#2e7d32 green darken-3"});
                    history.push("/");
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
                <input type="email" placeholder="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
                <input type="password" placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
                <button className="btn blue" type="submit" onClick={()=>Logindata()} > Login </button>
                <p>Don't have an account? <Link to="/signup"><b>Sign up</b></Link></p>
            </div>
        </div>
    );
}

export default Login;