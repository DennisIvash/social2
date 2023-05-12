import React from "react";
import './dialoguemessages.css'
import MessageItem from "./dialogue-message-item/MessageItem";

function DialogueMessages(props) {
    
    return (
        <div className="dialoguemessages">
            {props.dialogueMsgs.map(e=> <MessageItem message={e.message} id={e.id} key={e.id} />)}
        </div>

    )
}

export default DialogueMessages