import React from "react";

let postText = React.createRef();


const ProfileInfo = (props) => {
    let addPost = () => {
        props.addPost(postText.current.value)
        postText.current.value = '';
    }
    return (
        <div className="profile">
            <h2>My Posts</h2>
            <input ref={postText} type="text" placeholder="Enter a post" />
            <button onClick={addPost}>Add Post</button>
        </div>
    )
}

export default ProfileInfo