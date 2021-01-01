import React from 'react'
import {useState,useEffect} from 'react'
import  {useHistory} from 'react-router-dom'
import M from 'materialize-css';
const Createpost =()=>{
    const history = useHistory()
    const [title,setTitle]=useState("")
    const [body,setBody]=useState("")
    const [image,setImage]=useState("")
    const [url,setUrl]=useState("")
    const postDetails = ()=>{
        const data=new FormData()
        data.append("file",image)
        data.append("upload_preset","insta-clone")
        data.append("cloud_name","luckystore")
        fetch("https://api.cloudinary.com/v1_1/luckystore/image/upload",{
           method:"post",
           body:data
        })
        .then(res=>res.json())
        .then(data=>{
            setUrl(data.url)
        })
        .catch(err=>{
            console.log(err)
        })
    }
    useEffect(()=>{
        if(url){
            fetch("/createpost",{
                method:"post",
                headers:{
                    "Content-Type":"Application/json",
                    "Authorization":"Bearer "+localStorage.getItem("jwt")
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
                    M.toast({html: data.error ,classes:"#e53935 red darken-1"})
                }
                else{
                    M.toast({html:"created post successfully!",classes:"#4caf50 green"})
                    history.push('/')
                }
            })
            .catch(err=>
            {
                console.log(err)
            })
        }
    },[url])
    return(
        <div className="card input-field" 
        style={{margin :"30px auto",
                maxWidth:"500px",
                padding:"20px",
                textAlign:"center"}}>
                <h5>Createpost</h5>
                <input type="text"  placeholder="title"
                value={title} onChange={(e)=>setTitle(e.target.value)} />
                <input type="text"  placeholder="body" 
                value={body} onChange={(e)=>setBody(e.target.value)}/>
                <div className="file-field input-field">
                <div className="btn blue darken-1">
                    <span>Upload image</span>
                    <input type="file"
                     onChange={(e)=>setImage(e.target.files[0])}  />
                </div>
                <div className="file-path-wrapper">
                   <input className="file-path validate" type="text" />
                </div>
             </div>
               <button className="btn waves-effect waves-light #64b5f6 blue darken-1" onClick={()=>postDetails()}>Submit post</button> 
             </div>
    )
}
export default Createpost;