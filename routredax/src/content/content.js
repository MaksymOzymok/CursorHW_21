import React from "react";
import {Switch,Route,Redirect} from "react-router-dom";
import Home from "../components/home";
import Posts from "../components/posts/posts";
import AddUser from "../components/addUser/addUser";
import Users from "../components/users/users";
import AddForm from "../components/add-form/add-form";
const Content = (props)=>{
  return(
      <main>
          <Switch>
              <Route exact path = '/'><Home/></Route>
              <Route   path = '/tweets' > <Posts data = {props.data}  setLike = {props.setLike}/></Route>
              <Route path = '/users' ><Users users={props.users} getUsers={props.getUsers} isFetching = {props.isFetching}/></Route>
              <Route  path = '/addUser'><AddUser addUser={props.addUser}/></Route>
              <Route path={'/addPost'}><AddForm users = {props.users} addPost={props.addPost}/></Route>
          </Switch>
      </main>
  )
};
export default Content;