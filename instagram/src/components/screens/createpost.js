import {useState,useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import M from 'materialize-css';

const Createpost=()=>{
    const history=useHistory();
    const [title,setTitle]=useState("");
    const [body,setBody]=useState("");
    const [image,setImage]=useState("");
    const [url,setUrl]=useState("");
    useEffect(()=>{
        if(url){
            fetch("/createpost",{
                method:"post",
                headers:{
                    "Content-Type":"Application/json",
                    "Authorization":"Bearer "+localStorage.getItem("jwt"),
                },
                body:JSON.stringify({
                    title,
                    body,
                    pic:url
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
                    history.push("/");
                }
            })
            .catch(err=>{
                console.log(err);
            })
        }
    },[url])

    const Postdata=()=>{
        const data=new FormData();
        data.append("file",image);
        data.append("upload_preset","instagram-clone");
        data.append("cloud_name","pankajkumarbijarniyacloud");
        fetch("	https://api.cloudinary.com/v1_1/pankajkumarbijarniyacloud/image/upload",{
            method:"post",
            body:data
        })
        .then(res=>res.json())
        .then(data=>{
            setUrl(data.url);
        })
        .catch(err=>{
            console.log(err);
        })
    }
    
    return(
        <div className="card input-field" style={{margin:"8% auto",maxWidth:"550px",padding:"20px",textAlign:"center"}}>
            <h2 className="heading">Instagram</h2>
            <input type="text" placeholder="title" value={title} onChange={(e)=>setTitle(e.target.value)} />
            <input type="text" placeholder="body" value={body} onChange={(e)=>setBody(e.target.value)} />
            <div className="file-field input-field">
                <div className="btn blue">
                    <span>Upload</span>
                    <input type="file" onChange={(e)=>setImage(e.target.files[0])} />
                </div>
                <div className="file-path-wrapper">
                    <input className="file-path validate" type="text" />
                </div>
            </div>
            <button className="btn blue" type="submit" onClick={()=>Postdata()}> Create Post </button>
        </div>
    );
}

export default Createpost;