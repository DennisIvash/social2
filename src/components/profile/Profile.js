import React from "react";
import avatar from '../../img/elon.jpg'
import Posts from "./posts/Posts";
import './profile.css'

function Profile(props) {
    return(
        <div className="profile">
            <div className="me">
                <img src={avatar} alt="Elon Musk" />
                <p>{props.name}</p>
            </div>
            <Posts name={props.name} postMsgs={props.postsData.postMsgs} addPost={props.addPost} />
            
        </div>
    )
}

export default Profile