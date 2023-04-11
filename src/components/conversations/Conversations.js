import { NavLink } from 'react-router-dom'
import './Conversations.css'
import DialoguesItem from './dialogueItem/DialogueItems'
import Message from './dialoguemessage/DialogueMessages'

let dialogueNames = [
    {name: 'Bob Robin', id: 1},
    {name: 'Elon Musk', id: 2},
    {name: 'Bill Gates', id: 3},
]

let messageItems = [
    {message:'Hello!', id: 1},
    {message:'Lets go to mars', id: 2},
    {message:'Where is my chip?', id: 3},
]

function Conversations(props) {
    return(
        <div className="conversations">
            <div className="dialogue">
                {dialogueNames.map((e)=> <DialoguesItem name={e.name} id={e.id} />)}
            </div>
            <div className="message">
                {messageItems.map((e)=> <messageItems message={e.message} id={e.id} />)}

            </div>
            {/* <div className="message">
                <DialoguesItem name= {dialogueNames[0].name} id={dialogueNames[0].id} />
                <Message message={messageItems[0].message} id={messageItems[0].id} />
            </div>
            <div className="message">
                <DialoguesItem name={dialogueNames[1].name} id={dialogueNames[1].id} />                
                <Message message={messageItems[1].message} id={messageItems[1].id} />
            </div>
            <div className="message">
                <DialoguesItem name={dialogueNames[2].name} id={dialogueNames[2].id} />                
                <Message message={messageItems[2].message} id={messageItems[2].id} />
            </div>
            <input type="text" />
            <button>Send</button> */}
        </div>
    )
}

export default Conversations