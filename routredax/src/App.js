import React from "react";
import Menu from "./menu/menu";
import Content from "./content/content";
import {connect} from "react-redux";
import {setLike,getPosts,postPost} from "./actions/postActions";
import {getUsers,addUser} from "./actions/userActions";

class App extends React.Component{
    componentDidMount() {
        this.props.getUsers();
    }

    render() {
        return (
            <div>
                <Menu getUsers = {this.props.getUsers}
                getPosts = {this.props.getPosts}
                />
                <Content data = {this.props.post}
                         users = {this.props.users}
                setLike = {this.props.setLike}
                         isFetching = {this.props.isFetching}
                         addUser = {this.props.addUser}
                         addPost={this.props.postPost}
                />
            </div>
        )
    }
}
const  mapDispatchToProps = dispatch =>{
  return{
      setLike : id => dispatch(setLike(id)),
      getUsers : () =>  dispatch(getUsers()),
      addUser : (obj) => dispatch(addUser(obj)),
      getPosts : ()=> dispatch(getPosts()),
      postPost : (obj)=>dispatch(postPost(obj))
  }
};
const mapStateToProps = store =>{
    //console.log(store.post.data);
    return{
        post :{data: store.post.data,users : store.user.data},
        isFetching: store.user.isFetching,
        users : store.user.data
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(App);