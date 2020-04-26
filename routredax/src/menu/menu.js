import React from "react";
import {Link} from  "react-router-dom"
import "./menu.css"

const Menu = (props)=>{
    return(

            <ul className={"menu"}>
                <li><Link to='/'>Home</Link></li>
              <li  onClick={()=>props.getPosts()}> <Link to="/tweets">Tweets</Link></li>
                <li onClick={()=>props.getUsers()}><Link to="/users">Users</Link></li>
                <li ><Link to="/addUser">Add User</Link></li>
                <li ><Link to="/addPost">Add Post</Link></li>
            </ul>

    )
};
export default Menu;