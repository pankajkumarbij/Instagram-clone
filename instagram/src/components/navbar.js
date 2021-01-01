import {useContext} from 'react';
import {Link,useHistory} from 'react-router-dom';
import {UserContext} from '../App'

const Navbar=()=>{
    const {state,dispatch}=useContext(UserContext);
    const history=useHistory();
    const renderList=()=>{
        if(state){
            return [
                <li><Link to="/profile">Profile</Link></li>,
                <li><Link to="/createpost">Createpost</Link></li>,
                <li>
                    <button className="btn red" type="submit" onClick={()=>{
                        localStorage.clear();
                        dispatch({type:"CLEAR"});
                        history.push("/login");
                    }} > Logout </button>
                </li>
            ]
        }
        else{
            return [
                <li><Link to="/login">Login</Link></li>,
                <li><Link to="/signup">Sign up</Link></li>
            ]
        }
    }
    return (
        <nav>
            <div className="nav-wrapper white" style={{Color:"black"}}>
            <Link to={state?"/":"/login"} className="brand-logo left">Instagram</Link>
            <ul id="nav-mobile" className="right">
                {renderList()}
            </ul>
            </div>
        </nav>
    );
}

export default Navbar;
