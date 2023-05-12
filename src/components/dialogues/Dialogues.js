import React from "react";
import './dialogues.css'
import DialogueMessages from "./dialoguemessages/DialogueMessages";
import DialogueNames from "./dialoguenames/DialogueNames";

let messageText = React.createRef();

function Dialogues(props) {
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
            <input ref={messageText} type="text" />
            <button onClick={addMessage}>Send</button>
        </div>
    )

}

export default Dialogues