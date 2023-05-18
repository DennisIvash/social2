import React from "react";
import './dialogues.css'
import DialogueMessages from "./dialoguemessages/DialogueMessages";
import DialogueNames from "./dialoguenames/DialogueNames";

let messageText = React.createRef();

function Dialogues(props) {
    let onMessageChange = () => {
        props.onMessageChange(messageText.current.value)
        console.log(props);
    }
    let addMessage = () => {
        props.addMessage(messageText.current.value)
        messageText.current.value = '';

    }
    return (
        <div className="dialogues">
            <h2>Dialogues</h2>
            <div className="dialogueitems">
                <DialogueNames dialogueNames={props.dialogueData.dialogueNames} />
                <DialogueMessages dialogueMsgs={props.dialogueData.dialogueMsgs} />
            </div>
            <input onChange={onMessageChange} value={props.newMessageText} ref={messageText} type="text" placeholder="Enter a Message"/>
            <button onClick={addMessage}>Send</button>
        </div>
    )

}

export default Dialogues