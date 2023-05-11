import React from "react";
import './dialoguenames.css'
import { NavLink } from "react-router-dom";
import DialogueUser from "./dialogueuser/DialogueUser";

function DialogueNames(props) {
    return (
        <div className="dialoguenames">
            {props.dialogueNames.map((e) => <DialogueUser name={e.name} id={e.id} key={e.id} /> )}
            
        </div>

    )
}

export default DialogueNames