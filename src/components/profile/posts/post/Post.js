import React from "react";
import miniavatar from '../../../../img/elon_mini.jpg'
import './post.css'
function Post(props) {
    return (
        <div className="post">
            <img src={miniavatar} alt="" />
            <span>{props.name}</span>
            <p>{props.message}</p>
            <p className="like">Likes: {props.like}</p>
        </div>
    )
}

export default Post