import React from "react";
import Post from "./post/Post";
import ProfileInfo from "./profileinfo/ProfileInfo";


function Posts(props) {
    return (
        <div className="posts">
            <ProfileInfo addPost={props.addPost} newPostText={props.newPostText} onPostChange={props.onPostChange} />
            {props.postMsgs.map(e=> <Post message={e.message} id={e.id} key={e.id} like={e.like} />)}
        </div>
    )
}

export default Posts