import {useState,useEffect, useContext} from 'react';
import {UserContext} from '../../App';

const Profile=()=>{
    const [data, setdata] = useState([]);
    const {state,dispatch}=useContext(UserContext);
    useEffect(()=>{
        fetch("/myposts",{
            headers:{
                "Authorization":"Bearer "+localStorage.getItem("jwt"),
            },
        })
        .then(res=>res.json())
        .then(result=>{
            setdata(result.myposts);
        })
    },[])
    return (
        <div style={{maxWidth:"850px",margin:"0px auto"}}>
            <div style={{display:"flex",justifyContent:"space-around",margin:"18px 0px",borderBottom:"1px solid gray"}}>
                <div>
                    <img style={{width:"160px",height:"160px",borderRadius:"80px"}} src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8&auto=format&fit=crop&w=500&q=60" alt="Profile pic" />
                </div>
                <div>
                    <h4>{state.name}</h4>
                    <div style={{display:"flex",justifyContent:"space-between",width:"108%"}}>
                        <p><b>40</b> posts</p>
                        <p><b>40</b> followers</p>
                        <p><b>40</b> following</p>
                    </div>
                </div>
            </div>
            <div className="gallery">
                {
                    data.map(item=>{
                        return(
                            <img className="gallery-item" src={item.image} alt="Post pic" />
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Profile;
