import React from "react";
import { NavLink } from "react-router-dom";


const DialoguesItem = (props) => {
    return (
        <div>
            <NavLink to={`/dialogues/${props.id}`} className='name'>{props.name}</NavLink>
        </div>
    )
}

export default DialoguesItem;