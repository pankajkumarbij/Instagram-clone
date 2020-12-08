import React from 'react'

const Home =()=>{
    return(
        <div className="home">
            <div className="card home-card">
                <h5>ramesh</h5>
                <div className="card-image">
                    <img src="https://images.unsplash.com/photo-1496794795115-3247c050b08e?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDY0fGJvOGpRS1RhRTBZfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="No pic" />
                </div>
                <div classname="card-content">
                <i className="material-icons">favorite</i>
                    <h6>Title</h6>
                    <p>this is imagin picture</p>
                    <input type="text" placeholder="add a comment" />
                </div>
            </div>
            <div className="card home-card">
                <h5>ramesh</h5>
                <div className="card-image">
                    <img src="https://images.unsplash.com/photo-1496794795115-3247c050b08e?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDY0fGJvOGpRS1RhRTBZfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"  alt="No pic" />
                </div>
                <div className="card-content">
                <i className="material-icons" style={{color:"red"}}>favorite</i>
                    <h6>Title</h6>
                    <p>this is imagin picture</p>
                    <input type="text" placeholder="add a comment" />
                </div>
            </div>
            <div className="card home-card">
                <h5>ramesh</h5>
                <div className="card-image">
                    <img src="https://images.unsplash.com/photo-1496794795115-3247c050b08e?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDY0fGJvOGpRS1RhRTBZfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="No pic" />
                </div>
                <div className="card-content">
                <i className="material-icons">favorite</i>
                    <h6>Title</h6>
                    <p>this is imagin picture</p>
                    <input type="text" placeholder="add a comment" />
                </div>
            </div>
            
        </div>
    )
}
export default Home;