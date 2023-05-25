
import profileReducer from "./profileReducer"

const ADD_MESSAGE = 'ADD-MESSAGE'
const MESSAGE_CHANGE = 'MESSAGE-CHANGE'

let store = {
    _state: {
        profilePage: {
            postMsgs: [
                { message: 'Hi!', id: 1, like: 2 },
                { message: 'I am Elon Mask', id: 2, like: 4 },
            ],
            newPostText: ''
        },
        dialoguePage: {
            dialogueMsgs: [
                { message: 'Im Ivan Ivanov', id: 1 },
                { message: 'Im Peter Ivanov', id: 2 },
                { message: 'Im Fedar Ivanov', id: 3 },
            ],
            dialogueNames: [
                { name: 'Ivan Ivanov', id: 1 },
                { name: 'Peter Ivanov', id: 2 },
                { name: 'Fedar Ivanov', id: 3 },
            ],
            newMessageText: ''
        }
    },
    rerenderTree() {
        console.log('Fake Function');
    },
    subscribe(observer) {
        this.rerenderTree = observer
    },

    getState() {
        return this._state
    },
    dispatch(action) {
        this._state = profileReducer(action, this._state.profilePage)
        if (action.type == ADD_MESSAGE) {
            let newMessage = {
                message: this._state.dialoguePage.newMessageText,
                id: this._state.dialoguePage.dialogueMsgs.length + 1,
            }
            this._state.dialoguePage.dialogueMsgs.unshift(newMessage)
        } else if (action.type == MESSAGE_CHANGE) {
            this._state.dialoguePage.newMessageText = action.text
        }
        this.rerenderTree(this._state)
    },
}



export let onMessageChangeAC = (text) => {
    return {
        type: MESSAGE_CHANGE,
        text: text
    }
}

export let addMessageAC = () => {
    return {
        type: ADD_MESSAGE
    }
}

export default store;
