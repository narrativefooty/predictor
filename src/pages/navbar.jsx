import { Outlet, Link } from "react-router-dom";

function Nav(){
    return(
        <div className='navBar'>
            <Link className="nav-item"> Home</Link>
            <Link className="nav-item"> Predictor</Link>
            <Link className="nav-item"> Fixtures</Link>
            <Link className="nav-item"> News</Link>
            <Link className="nav-item"> Leagues</Link>
            <Link className="nav-item"> Profile</Link>
            <Link className="nav-item"> Settings</Link>
        </div>
    )
}

export default Nav