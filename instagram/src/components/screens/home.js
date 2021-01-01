import {useState,useEffect,useContext} from 'react';
import {UserContext} from '../../App';

const Home=()=>{
    const [data, setdata] = useState([]);
    const {state,dispatch} = useContext(UserContext);
    useEffect(()=>{
        fetch("/allposts",{
            headers:{
                "Authorization":"Bearer "+localStorage.getItem("jwt"),
            },
        })
        .then(res=>res.json())
        .then(result=>{
            //console.log(result);
            setdata(result.posts);
        })
    },[])

    const likePost=(id)=>{
        fetch("/like",{
            method:"put",
            headers:{
                "Content-Type":"application/json",
                "Authorization":"Bearer "+localStorage.getItem("jwt"),
            },
            body:JSON.stringify({
                postId:id,
            })
        })
        .then(res=>res.json())
        .then(result=>{
            //console.log(result);
            const newData=data.map(item=>{
                if(item._id==result._id){
                    return result;
                }
                else{
                    return item;
                }
            })
            setdata(newData);
        })
        .catch(err=>{
            console.log(err);
        })
    }

    const unlikePost=(id)=>{
        fetch("/unlike",{
            method:"put",
            headers:{
                "Content-Type":"application/json",
                "Authorization":"Bearer "+localStorage.getItem("jwt"),
            },
            body:JSON.stringify({
                postId:id,
            })
        })
        .then(res=>res.json())
        .then(result=>{
            //console.log(result);
            const newData=data.map(item=>{
                if(item._id==result._id){
                    return result;
                }
                else{
                    return item;
                }
            })
            setdata(newData);
        })
        .catch(err=>{
            console.log(err);
        })
    }

    return (
        <div className="home">
            {
                data.map(item=>{
                    return(
                        <div className="card home-card">
                            <h5>{item.postedby.name}</h5>
                            <div className="card-image">
                                <img src={item.image} alt="Post pic" />
                            </div>
                            <div className="card-content">
                                {item.likes.includes(state._id)
                                ? <a><i className="material-icons" onClick={()=>unlikePost(item._id)} style={{color:"red"}}>favorite</i></a>
                                : <a><i className="material-icons" onClick={()=>likePost(item._id)} >favorite_border</i></a>
                                }
                                <h6>{item.likes.length} likes</h6>
                                <h4>{item.title}</h4>
                                <p>{item.body}</p>
                                <input type="text" placeholder="add a comment" />
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default Home;
