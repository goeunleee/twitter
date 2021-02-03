import React from "react";
import { Link } from "react-router-dom";

const Navigation = () =><nav>
    
    <ul>
        <li>
            <Link to="/">home</Link>
        </li>
        <li>
            <Link to="/profile">MyProfile</Link>
        </li>
    </ul>
</nav>

export default Navigation;