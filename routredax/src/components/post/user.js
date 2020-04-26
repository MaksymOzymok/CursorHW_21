import React from "react";
import "./user.css"

const User = ({userData})=>{
    const {avatar,name,username, verified = true} = userData;
    const verifiedIconStyle = {
        display : !verified ? "none" : "inline"
    };

    return (
        <div className="user">
            <img src={avatar}  className="user-photo" alt="userPhoto"/>
            <span className="user-name">{name}</span>
            <i style={verifiedIconStyle} className="fas fa-certificate verified-icon"></i>
            <span className="user-nickname">{username}</span>
        </div>
    )
};
export default User;