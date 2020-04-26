import React from "react";
import "./post.css"
import User from "./user";
import PostDate from "./post-date";
import PostContent from "./post-content";
import PostOptions from "./post-options";

export default class Post extends React.Component{

    render() {

        const contentData = this.props.data.data;
        const userData = this.props.data.userData;

        const postData =  {
            id : 1,
                comments: 482,
                sharing: 146,
                likes: 887,
        };
        return (
            <div className="post">
                <div className="top-panel">
                    <User userData={userData}/>
                    <PostDate date={contentData.date}/>
                </div>
                <PostContent contentData={contentData}/>
                <PostOptions postData={postData}  id = {this.props.id} setLike = {this.props.setLike}/>
            </div>
        )
    }
};