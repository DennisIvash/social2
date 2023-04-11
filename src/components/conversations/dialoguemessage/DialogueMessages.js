import React from "react";
import { NavLink } from "react-router-dom";

const Message = (props) => {
    return (
        <div className='messagecssclass'>
            <p className='msg'>{props.message}</p>
        </div>
    )

}

export default Message;