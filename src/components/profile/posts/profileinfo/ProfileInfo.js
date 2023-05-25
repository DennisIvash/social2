import React from "react";
import { addPostAC, onPostChangeAC } from "../../../../Data/profileReducer";

let postText = React.createRef();

const ProfileInfo = (props) => {
    let onPostChange = () => {
        props.dispatch(onPostChangeAC(postText.current.value))
    }
    let addPost = () => {
        props.dispatch(addPostAC())
        postText.current.value = '';
    }
    return (
        <div className="profile">
            <h2>My Posts</h2>
            <input onChange={onPostChange} value={props.newPostText} ref={postText} type="text" placeholder="Enter a post" />
            <button onClick={addPost}>Add Post</button>
        </div>
    )
}

export default ProfileInfo