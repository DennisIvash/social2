import React from "react";
import './dialogues.css'
import DialogueMessages from "./dialoguemessages/DialogueMessages";
import DialogueNames from "./dialoguenames/DialogueNames";

function Dialogues(props) {
    return (
        <div className="dialogues">
            <h2>Dialogues</h2>
            <div className="dialogueitems">
                <DialogueNames dialogueNames={props.dialogueData.dialogueNames} />
                <DialogueMessages dialogueMsgs={props.dialogueData.dialogueMsgs} />
            </div>
            <input type="text" />
            <button>Send</button>
        </div>
    )

}

export default Dialogues