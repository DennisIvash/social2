import React from "react";

let postText = React.createRef();

let addPost = (props) => {
    props.addPost(postText.current.value)
    // console.log(postText.current.value);
}

const ProfileInfo = () => {
    return (
        <div className="profile">
            <h2>My Posts</h2>
            <input ref={postText} type="text" placeholder="Enter a post" />
            <button onClick={addPost}>Add Post</button>
        </div>
    )
}

export default ProfileInfo