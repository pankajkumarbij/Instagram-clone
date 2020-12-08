import React from 'react'
import {Link} from 'react-router-dom'
const Navbar=()=>{
    return(
        <nav>
        <div className="nav-wrapper white">
          <Link to="/" className="brand-logo left">Insagram</Link>
          <ul id="nav-mobile" className="right">
            <li><Link to="/sigin">Login</Link></li>
            <li><Link to="/signup">Signup</Link></li>
            <li><Link to="/createpost">Createpost</Link></li>
            <li><Link to="/profile">profile</Link></li>
            </ul>
            </div>
      </nav>

           
    )
}
export default Navbar;