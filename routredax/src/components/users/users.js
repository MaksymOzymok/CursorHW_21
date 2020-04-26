import React from "react";
import User from "../user/user";



const Users = (props)=> {
return(
    <div>
        <h2>Users</h2>
       {props.users.length!==0?  getAllUsers(props.users):null}
    </div>
)
};

const getAllUsers = (users)=>{
  let elements = users.map(user=>{
      return(
          <User key={user.id} props={user}/>
      )
  });
  return elements;
};

export default Users;