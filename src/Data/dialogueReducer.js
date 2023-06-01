const ADD_MESSAGE = 'ADD-MESSAGE'
const MESSAGE_CHANGE = 'MESSAGE-CHANGE'

let initialState = {
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

let dialogueReducer = (state=initialState, action) => {
    if (action.type == ADD_MESSAGE) {
        let newMessage = {
            message: state.newMessageText,
            id: state.dialogueMsgs.length + 1,
        }
        state.dialogueMsgs.unshift(newMessage)
        state.newMessageText = ''
    } else if (action.type == MESSAGE_CHANGE) {
        state.newMessageText = action.text
    }

    return state
}

export default dialogueReducer

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